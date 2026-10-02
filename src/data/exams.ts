import { it005Exam02 } from "./it005-exam-02";

export const subjects: any[] = [
  {
    id: "mang-may-tinh",
    code: "IT005",
    name: "Mạng máy tính",
    description: "Bộ câu hỏi luyện thi từ đề IT005.F31.CN1.CNTT.",
    color: "emerald",
    exams: [
      {
        id: "it005-thi-thu-01",
        title: "Bài thi thử IT005",
        source: "CITD-ELEARNING - 18/09/2026",
        duration: "12 phút 30 giây",
        questions: [
          {
            id: "q1",
            prompt:
              "Alice lần đầu sử dụng trình duyệt để xem một trang web có 1 file html, đi kèm 3 đối tượng hình ảnh. Biết trình duyệt của Alice và Web Server đều sử dụng HTTP/1.1, hỏi sẽ có bao nhiêu gói tin TCP SYN-ACK được máy của Alice gửi đi trong quá trình bắt tay ba bước?",
            options: [
              { id: "a", text: "0" },
              { id: "b", text: "1" },
              { id: "c", text: "4" },
              { id: "d", text: "3" },
            ],
            correctOptionId: "a",
            explanation:
              "Trong bắt tay TCP, SYN-ACK do server gửi về client. Máy của Alice là client nên không gửi SYN-ACK. Nếu hỏi số lần thiết lập kết nối HTTP/1.1 thì thường chỉ cần 1 kết nối bền vững.",
          },
          {
            id: "q2",
            prompt: "Địa chỉ IP nào hợp lệ để cấp phát cho host của mạng con 143.168.64.0/19?",
            options: [
              { id: "a", text: "143.168.95.255" },
              { id: "b", text: "143.168.95.0" },
              { id: "c", text: "143.168.96.1" },
              { id: "d", text: "143.168.63.111" },
            ],
            correctOptionId: "b",
            explanation:
              "Mạng 143.168.64.0/19 có dải host từ 143.168.64.1 đến 143.168.95.254. 143.168.95.0 vẫn là địa chỉ host hợp lệ trong subnet này.",
          },
          {
            id: "q3",
            prompt: "Địa chỉ IP nào sau đây thuộc lớp B?",
            options: [
              { id: "a", text: "203.5.6.7" },
              { id: "b", text: "10.1.1.1" },
              { id: "c", text: "127.255.2.2" },
              { id: "d", text: "172.29.14.10" },
            ],
            correctOptionId: "d",
            explanation: "Địa chỉ lớp B có octet đầu tiên trong khoảng 128 đến 191.",
          },
          {
            id: "q4",
            prompt:
              "Giao thức MAC nào mà kênh truyền sẽ được chia thành các mảnh nhỏ, sau đó cấp phát sử dụng độc quyền cho các node?",
            options: [
              { id: "a", text: "CSMA/CD" },
              { id: "b", text: "Phân hoạch kênh" },
              { id: "c", text: "ALOHA" },
              { id: "d", text: "Xoay vòng" },
            ],
            correctOptionId: "b",
            explanation:
              "Phân hoạch kênh chia tài nguyên truyền thành các phần nhỏ như thời gian, tần số hoặc mã và cấp cho node sử dụng.",
          },
          {
            id: "q5",
            prompt: "Ở tầng Vận chuyển, để phát hiện lỗi trong gói tin dùng kỹ thuật gì?",
            options: [
              { id: "a", text: "Checksum" },
              { id: "b", text: "Bộ định thời gian - Timer" },
              { id: "c", text: "Số báo nhận - ACK" },
              { id: "d", text: "CRC" },
            ],
            correctOptionId: "a",
            explanation: "TCP/UDP dùng checksum để phát hiện lỗi trong segment ở tầng vận chuyển.",
          },
          {
            id: "q6",
            prompt:
              "Một công ty cần cấu hình mạng nội bộ cho 100 host từ một mạng thuộc lớp C. Subnet mask phù hợp nhất cho mạng này là gì?",
            options: [
              { id: "a", text: "255.255.255.128" },
              { id: "b", text: "255.255.255.240" },
              { id: "c", text: "255.255.255.192" },
              { id: "d", text: "255.255.128.0" },
            ],
            correctOptionId: "a",
            explanation:
              "/25 có 128 địa chỉ, dùng được 126 host, phù hợp nhất cho nhu cầu 100 host.",
          },
          {
            id: "q7",
            prompt: "Điểm khác biệt nhất của RDT 2.2 so với RDT 2.1 là gì?",
            options: [
              { id: "a", text: "Phát hiện mất gói tin" },
              { id: "b", text: "Không sử dụng NAK" },
              { id: "c", text: "Không sử dụng ACK" },
              { id: "d", text: "Phát hiện ACK bị lỗi" },
            ],
            correctOptionId: "b",
            explanation: "RDT 2.2 loại bỏ NAK, dùng ACK kèm số thứ tự để báo trạng thái.",
          },
          {
            id: "q8",
            prompt:
              "Một tổ chức được cấp một khối địa chỉ có địa chỉ bắt đầu là 199.34.76.64/28. Có bao nhiêu địa chỉ có thể gán được cho các thiết bị?",
            options: [
              { id: "a", text: "16" },
              { id: "b", text: "8" },
              { id: "c", text: "14" },
              { id: "d", text: "32" },
            ],
            correctOptionId: "c",
            explanation: "/28 có 16 địa chỉ, trừ network và broadcast còn 14 địa chỉ gán cho host.",
          },
          {
            id: "q9",
            prompt: "Ghép các giao thức và cổng mặc định tương ứng.",
            options: [
              { id: "a", text: "Telnet-23, SSH-22, HTTP-80, POP3-110, DNS-53, SMTP-25" },
              { id: "b", text: "Telnet-22, SSH-23, HTTP-80, POP3-25, DNS-53, SMTP-110" },
              { id: "c", text: "Telnet-21, SSH-22, HTTP-443, POP3-110, DNS-25, SMTP-53" },
              { id: "d", text: "Telnet-23, SSH-53, HTTP-110, POP3-80, DNS-22, SMTP-25" },
            ],
            correctOptionId: "a",
            explanation:
              "Các cổng mặc định thường gặp: Telnet 23, SSH 22, HTTP 80, POP3 110, DNS 53, SMTP 25.",
          },
          {
            id: "q10",
            prompt:
              "Ngoài việc cấp địa chỉ IP cho thiết bị yêu cầu, DHCP Server còn trả về thông tin nào sau đây?",
            options: [
              { id: "a", text: "Tên và địa chỉ của DHCP Server" },
              { id: "b", text: "Default Gateway" },
              { id: "c", text: "Tất cả đều đúng" },
              { id: "d", text: "Physical Address" },
            ],
            correctOptionId: "c",
            explanation:
              "DHCP có thể trả về nhiều thông tin cấu hình mạng như gateway, DNS, thông tin server và các option khác.",
          },
          {
            id: "q11",
            prompt:
              "Byte đầu tiên của một địa chỉ IPv4 có giá trị 11100001, địa chỉ này thuộc lớp nào?",
            options: [
              { id: "a", text: "Lớp C" },
              { id: "b", text: "Lớp B" },
              { id: "c", text: "Lớp A" },
              { id: "d", text: "Lớp D" },
            ],
            correctOptionId: "d",
            explanation: "11100001 bắt đầu bằng 1110 nên thuộc lớp D.",
          },
          {
            id: "q12",
            prompt:
              "Trong Go-Back-N, bên gửi A gửi các gói 2,3,4,5,6. Sau một khoảng thời gian, A nhận được ACK tương ứng của gói 2,3,5. Nhận định nào dưới đây không đúng?",
            options: [
              { id: "a", text: "Gói 6 chưa được gửi thành công đến bên nhận" },
              { id: "b", text: "Gói 4 chưa được gửi thành công đến bên nhận" },
              { id: "c", text: "Gói 5 đã được gửi thành công đến bên nhận" },
              { id: "d", text: "ACK của gói tin 4 có thể bị mất gói" },
            ],
            correctOptionId: "b",
            explanation:
              "ACK trong Go-Back-N thường có tính tích lũy. Nhận ACK 5 cho thấy các gói trước đó đã được nhận đúng theo thứ tự.",
          },
          {
            id: "q13",
            prompt:
              "Độ trễ nào dưới đây phụ thuộc vào khoảng cách giữa các node truyền trong truyền thông dữ liệu?",
            options: [
              { id: "a", text: "Trễ lan truyền" },
              { id: "b", text: "Trễ xử lý" },
              { id: "c", text: "Trễ xếp hàng" },
              { id: "d", text: "Trễ truyền" },
            ],
            correctOptionId: "a",
            explanation:
              "Trễ lan truyền phụ thuộc vào khoảng cách truyền và tốc độ lan truyền tín hiệu.",
          },
          {
            id: "q14",
            prompt: "Phát biểu nào sau đây SAI về địa chỉ IP 172.15.1.0?",
            options: [
              { id: "a", text: "Có subnet mask chuẩn là 255.255.0.0" },
              { id: "b", text: "Không thể cấp phát cho host vì là địa chỉ mạng" },
              { id: "c", text: "Thuộc Lớp B" },
              { id: "d", text: "Là địa chỉ Public IP" },
            ],
            correctOptionId: "b",
            explanation:
              "172.15.1.0 thuộc lớp B public. Với mask mặc định /16, network là 172.15.0.0 nên 172.15.1.0 vẫn có thể là host.",
          },
          {
            id: "q15",
            prompt:
              "Để kết nối hai máy tính trực tiếp với nhau, có thể sử dụng loại cable nào là phù hợp nhất?",
            options: [
              { id: "a", text: "Cáp thẳng" },
              { id: "b", text: "Không có loại nào" },
              { id: "c", text: "Cáp xoắn" },
              { id: "d", text: "Cáp console" },
            ],
            correctOptionId: "c",
            explanation:
              "Kết nối trực tiếp hai máy tính thường dùng cáp xoắn chéo trong kiến thức mạng cơ bản.",
          },
          {
            id: "q16",
            prompt: "Ghép nối các dịch vụ và chức năng tương ứng.",
            options: [
              {
                id: "a",
                text: "DHCP-cấp IP tự động, DNS-phân giải tên miền, SMTP-gửi thư, HTTP-web, FTP-truyền tệp, POP3-đọc thư",
              },
              {
                id: "b",
                text: "DHCP-web, DNS-gửi thư, SMTP-phân giải tên miền, HTTP-cấp IP, FTP-đọc thư, POP3-truyền tệp",
              },
              {
                id: "c",
                text: "DHCP-phân giải tên miền, DNS-cấp IP, SMTP-web, HTTP-gửi thư, FTP-đọc thư, POP3-truyền tệp",
              },
              {
                id: "d",
                text: "DHCP-truyền tệp, DNS-web, SMTP-đọc thư, HTTP-cấp IP, FTP-gửi thư, POP3-phân giải tên miền",
              },
            ],
            correctOptionId: "a",
            explanation:
              "DHCP cấp IP tự động; DNS phân giải tên miền; SMTP gửi thư; HTTP truy cập web; FTP truyền tệp; POP3 đọc thư.",
          },
          {
            id: "q17",
            prompt: "Địa chỉ nào sau đây là địa chỉ quảng bá của mạng 192.168.25.128/27?",
            options: [
              { id: "a", text: "192.168.25.100" },
              { id: "b", text: "192.168.25.159" },
              { id: "c", text: "192.168.25.128" },
              { id: "d", text: "192.168.25.25" },
            ],
            correctOptionId: "b",
            explanation:
              "/27 có block size 32. Mạng 192.168.25.128 chạy đến 192.168.25.159, nên broadcast là .159.",
          },
          {
            id: "q18",
            prompt:
              "Dùng thuật toán Dijkstra từ đỉnh u. Chọn bộ đáp án đúng cho: giá trị D sau bước 0, đỉnh thứ 2 trong N’, và đường đi ngắn nhất từ u đến z.",
            options: [
              { id: "a", text: "D=(2,1,4,2,4); đỉnh thứ 2 là x; đường đi u → x → y → z" },
              { id: "b", text: "D=(∞,∞,∞,∞,∞); đỉnh thứ 2 là v; đường đi u → w → z" },
              { id: "c", text: "D=(2,1,∞,∞,∞); đỉnh thứ 2 là w; đường đi u → x → w → z" },
              { id: "d", text: "D=(2,1,5,∞,∞); đỉnh thứ 2 là y; đường đi u → v → x → y → z" },
            ],
            correctOptionId: "a",
            explanation:
              "Theo đáp án mẫu trong đề: sau khởi tạo lấy các cạnh kề từ u, chọn x vì có khoảng cách nhỏ nhất, và đường ngắn nhất tới z đi qua x, y.",
          },
          {
            id: "q19",
            prompt:
              "Địa chỉ IP nào sau đây không dùng để kết nối trên Internet, tức là không tồn tại trong mạng Internet public?",
            options: [
              { id: "a", text: "192.168.100.20" },
              { id: "b", text: "126.0.0.1" },
              { id: "c", text: "172.32.100.10" },
              { id: "d", text: "11.10.1.1" },
            ],
            correctOptionId: "a",
            explanation:
              "Theo RFC1918, 192.168.0.0/16 là dải địa chỉ private, không định tuyến trực tiếp trên Internet public.",
          },
          {
            id: "q20",
            prompt:
              "Cho chuỗi sinh G = 1101, chuỗi dữ liệu D = 10011101. Giá trị CRC bits R để kiểm tra lỗi sẽ được đính kèm theo D là gì?",
            options: [
              { id: "a", text: "100" },
              { id: "b", text: "110" },
              { id: "c", text: "111" },
              { id: "d", text: "001" },
            ],
            correctOptionId: "a",
            explanation:
              "Thêm 3 bit 0 vào D rồi chia modulo-2 cho 1101, phần dư CRC thu được là 100.",
          },
          {
            id: "q21",
            prompt:
              "Router R nhận IP datagram kích thước 4404 byte, IP Header 20 byte. R phân mảnh với MTU = 1500. Giá trị trong gói phân mảnh thứ 3 là?",
            options: [
              { id: "a", text: "FragFlag: 1, Datagram Length: 1424, Offset: 18" },
              { id: "b", text: "Tất cả đều sai" },
              { id: "c", text: "FragFlag: 1, Datagram Length: 1444, Offset: 370" },
              { id: "d", text: "FragFlag: 0, Datagram Length: 1500, Offset: 2960" },
            ],
            correctOptionId: "c",
            explanation:
              "Mỗi fragment đầu chở 1480 byte payload. Payload còn lại ở mảnh thứ 3 là 1424 byte, cộng header 20 thành 1444; offset = 2960/8 = 370.",
          },
          {
            id: "q22",
            prompt: "Mạng lớp C cần chia thành 8 mạng con thì cần sử dụng subnet mask nào?",
            options: [
              { id: "a", text: "255.255.255.192" },
              { id: "b", text: "255.255.255.224" },
              { id: "c", text: "255.255.255.0" },
              { id: "d", text: "255.255.255.240" },
            ],
            correctOptionId: "b",
            explanation:
              "Từ lớp C /24, cần 8 subnet nên mượn 3 bit vì 2^3 = 8. Mask mới là /27 = 255.255.255.224.",
          },
          {
            id: "q23",
            prompt:
              "Với mô hình Bellman-Ford trong đề, chọn bộ đáp án đúng cho vector ban đầu của v, x, w và vector của w sau khi nhận dv, dx.",
            options: [
              {
                id: "a",
                text: "dv=(2,0,5,1,∞); dx=(∞,5,0,3,2); dw=(∞,1,3,0,5); sau cập nhật dw=(3,1,3,0,5)",
              },
              {
                id: "b",
                text: "dv=(∞,∞,∞,∞,∞); dx=(6,4,0,3,2); dw=(3,1,3,0,5); sau cập nhật dw=(2,5,5,3,2)",
              },
              {
                id: "c",
                text: "dv=(2,0,4,1,6); dx=(6,5,0,3,2); dw=(∞,∞,∞,∞,∞); sau cập nhật dw=(∞,5,0,3,2)",
              },
              {
                id: "d",
                text: "dv=(2,0,4,1,∞); dx=(∞,∞,∞,∞,∞); dw=(∞,1,3,0,∞); sau cập nhật dw=(2,0,5,1,∞)",
              },
            ],
            correctOptionId: "a",
            explanation:
              "Vector ban đầu ghi chi phí trực tiếp đến láng giềng và ∞ nếu chưa biết. Sau khi w nhận thông tin từ v và x, w cập nhật đường tới u tốt hơn qua v.",
          },
          {
            id: "q24",
            prompt:
              "Đối với TCP, khi nhận được segment có Sequence Number = 3000 và Length = 500 byte, bên nhận phản hồi Acknowledgement Number bao nhiêu?",
            options: [
              { id: "a", text: "2999" },
              { id: "b", text: "3500" },
              { id: "c", text: "3501" },
              { id: "d", text: "3000" },
            ],
            correctOptionId: "b",
            explanation: "ACK number là byte kế tiếp bên nhận mong đợi: 3000 + 500 = 3500.",
          },
          {
            id: "q25",
            prompt:
              "Cho mạng có địa chỉ 205.100.16.0/255.255.248.0. Địa chỉ IP nào sau đây thuộc mạng đã cho?",
            options: [
              { id: "a", text: "205.100.15.20" },
              { id: "b", text: "205.100.23.1" },
              { id: "c", text: "205.101.16.2" },
              { id: "d", text: "205.100.26.56" },
            ],
            correctOptionId: "b",
            explanation:
              "Mask 255.255.248.0 là /21, block ở octet thứ ba có bước nhảy 8. Mạng 205.100.16.0 gồm 205.100.16.0 đến 205.100.23.255.",
          },
          {
            id: "q26",
            prompt: "Trong mô hình chồng giao thức Internet, tầng mạng chịu trách nhiệm gì?",
            options: [
              { id: "a", text: "Truyền dữ liệu trên đường truyền" },
              { id: "b", text: "Định tuyến dữ liệu từ nguồn đến đích" },
              { id: "c", text: "Cung cấp địa chỉ IP cho các thiết bị" },
              { id: "d", text: "Mã hoá dữ liệu" },
            ],
            correctOptionId: "b",
            explanation:
              "Tầng mạng chịu trách nhiệm định tuyến và chuyển tiếp gói tin từ nguồn đến đích.",
          },
          {
            id: "q27",
            prompt: "Địa chỉ nào dưới đây là địa chỉ tầng 2, tức địa chỉ MAC?",
            options: [
              { id: "a", text: "192.168.1.100" },
              { id: "b", text: "00-00-12-34-FE-AA" },
              { id: "c", text: "0000.1234.FEG" },
              { id: "d", text: "00-12-34-FE-GH" },
            ],
            correctOptionId: "b",
            explanation:
              "Địa chỉ MAC gồm các ký tự hexa. FE hợp lệ, còn G/H không phải ký tự hexa.",
          },
          {
            id: "q28",
            prompt: "Công thức để tính độ trễ lan truyền là gì?",
            options: [
              { id: "a", text: "d/s" },
              { id: "b", text: "d/s - L/R" },
              { id: "c", text: "d/s + L/R" },
              { id: "d", text: "L/R" },
            ],
            correctOptionId: "a",
            explanation: "Trễ lan truyền bằng khoảng cách d chia cho tốc độ lan truyền s.",
          },
          {
            id: "q29",
            prompt: "Mặt nạ mạng mặc định của lớp A là gì?",
            options: [
              { id: "a", text: "Tất cả đều sai" },
              { id: "b", text: "255.255.0.0" },
              { id: "c", text: "255.255.255.0" },
              { id: "d", text: "255.0.0.0" },
            ],
            correctOptionId: "d",
            explanation: "Subnet mask mặc định của lớp A là /8, tức 255.0.0.0.",
          },
          {
            id: "q30",
            prompt:
              "Trong cách đánh địa chỉ theo lớp, không gian địa chỉ IPv4 được chia thành bao nhiêu lớp?",
            options: [
              { id: "a", text: "6" },
              { id: "b", text: "4" },
              { id: "c", text: "5" },
              { id: "d", text: "3" },
            ],
            correctOptionId: "c",
            explanation: "Địa chỉ IPv4 classful gồm 5 lớp: A, B, C, D, E.",
          },
        ],
      },
      it005Exam02,
    ],
  },
];
