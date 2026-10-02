export const topicNames: any = {
  CA_PIPELINE: "Pipeline",
  CA_MEMORY: "Bộ nhớ / cache",
  CA_LOGIC: "Logic số",
  CA_DATAPATH: "Datapath",
  CA_ENCODING: "Mã hóa lệnh",
  CA_MIPS: "MIPS",
  CA_GENERAL: "Cấu trúc máy tính",
  DB_NORMALIZATION: "Chuẩn hóa",
  DB_DEPENDENCY: "Phụ thuộc hàm",
  DB_ERD: "ERD",
  DB_KEYS: "Khóa",
  DB_INTEGRITY: "Ràng buộc / toàn vẹn",
  DB_SQL_SERVER: "SQL Server / giao tác",
  DB_SQL: "SQL syntax",
  DB_RELATIONAL: "Mô hình quan hệ",
  DB_ARCHITECTURE: "Kiến trúc CSDL",
  DB_GENERAL: "Lý thuyết CSDL",
  HTTP_TCP: "HTTP / TCP",
  SUBNET: "Subnet",
  IP_CLASS: "Lớp IP",
  MAC_PROTOCOL: "Giao thức MAC",
  TRANSPORT: "Tầng vận chuyển",
  RDT: "RDT",
  GBN: "Go-Back-N",
  PORT_SERVICE: "Cổng / dịch vụ",
  DHCP: "DHCP",
  DELAY: "Độ trễ",
  DIJKSTRA: "Dijkstra",
  PRIVATE_IP: "IP private",
  CRC: "CRC",
  FRAGMENTATION: "Phân mảnh IP",
  BELLMAN_FORD: "Bellman-Ford",
  TCP_SEQ_ACK: "TCP Seq / ACK",
  NETWORK_LAYER: "Tầng mạng",
  MAC_ADDRESS: "Địa chỉ MAC",
  CABLING: "Cáp mạng",
};

export const networkExamTopics: any = [
  "HTTP_TCP",
  "SUBNET",
  "IP_CLASS",
  "MAC_PROTOCOL",
  "TRANSPORT",
  "SUBNET",
  "RDT",
  "SUBNET",
  "PORT_SERVICE",
  "DHCP",
  "IP_CLASS",
  "GBN",
  "DELAY",
  "PRIVATE_IP",
  "CABLING",
  "PORT_SERVICE",
  "SUBNET",
  "DIJKSTRA",
  "PRIVATE_IP",
  "CRC",
  "FRAGMENTATION",
  "SUBNET",
  "BELLMAN_FORD",
  "TCP_SEQ_ACK",
  "SUBNET",
  "NETWORK_LAYER",
  "MAC_ADDRESS",
  "DELAY",
  "IP_CLASS",
  "IP_CLASS",
];

export function shuffle(items: any[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getWeakTopics(subject: any, topics: any) {
  const available = new Set(
    subject.exams.flatMap((exam: any) => exam.questions.map((q: any) => q.topic)),
  );
  return Object.entries(topics)
    .filter(
      ([topic, value]: any) =>
        available.has(topic) && value.wrongCount > 0 && value.correctStreak < 3,
    )
    .map(([topic, value]: any) => ({
      topic,
      ...value,
      name: topicNames[topic] || topic,
      priority:
        (value.wrongCount / Math.max(1, value.attempts)) * (1 + Math.log1p(value.wrongCount)),
    }))
    .sort((a, b) => b.priority - a.priority);
}

export function recordTopicResult(topics: any, topic: any, correct: any) {
  if (!topic) return topics;
  const previous = topics[topic] || { attempts: 0, wrongCount: 0, correctStreak: 0 };
  return {
    ...topics,
    [topic]: {
      attempts: previous.attempts + 1,
      wrongCount: previous.wrongCount + (correct ? 0 : 1),
      correctStreak: correct ? previous.correctStreak + 1 : 0,
    },
  };
}

export function createAdaptiveExam(subject: any, topics: any) {
  const bank: any[] = [
    ...new Map(
      subject.exams
        .flatMap((exam: any) => exam.questions)
        .filter((q: any) => !q.requiresImage)
        .map((q: any) => [q.id, q]),
    ).values(),
  ];
  const count = Math.min(30, bank.length);
  const weakTopics = getWeakTopics(subject, topics);
  const weakIds = new Set(weakTopics.map((topic: any) => topic.topic));
  // Weighted sampling without replacement emphasizes higher-error topics.
  const weakPool = bank
    .filter((q: any) => weakIds.has(q.topic))
    .map((q: any) => {
      const weight = weakTopics.find((topic: any) => topic.topic === q.topic).priority;
      return { q, rank: -Math.log(Math.max(Number.EPSILON, Math.random())) / weight };
    })
    .sort((a, b) => a.rank - b.rank)
    .map(({ q }) => q);
  const weakQuestions = weakPool.slice(0, Math.round(count * 0.6));
  const other = shuffle(bank.filter((q: any) => !weakIds.has(q.topic))).slice(
    0,
    count - weakQuestions.length,
  );
  const chosen = [...weakQuestions, ...other];
  const chosenIds = new Set(chosen.map((q: any) => q.id));
  const questions = [
    ...chosen,
    ...shuffle(bank.filter((q: any) => !chosenIds.has(q.id))).slice(0, count - chosen.length),
  ];
  return {
    id: `adaptive-${subject.id}`,
    subjectId: subject.id,
    mode: "adaptive",
    title: "Luyện chủ đề yếu",
    duration: null,
    source: "Ngân hàng câu hỏi",
    questions,
    weakQuestionCount: questions.filter((q: any) => weakIds.has(q.topic)).length,
  };
}
