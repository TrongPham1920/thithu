export const it004ReviewExam: any = {
  id: "it004-on-tap-ly-thuyet-syntax",
  title: "IT004 - Ôn tập lý thuyết & syntax",
  source: "On_tap_CSDL_339_cau_keyword_in_dam",
  duration: "112 phút",
  questions: [
    {
      id: "it004-q1",
      prompt: "Trong mô hình ERD, Attribute (thuộc tính) dùng để biểu diễn gì?",
      options: [
        {
          id: "a",
          text: "Đặc điểm hoặc thông tin mô tả một thực thể",
        },
        {
          id: "b",
          text: "Số lượng bản ghi trong bảng",
        },
        {
          id: "c",
          text: "Khóa ngoại của tất cả các thực thể",
        },
        {
          id: "d",
          text: "Mối quan hệ giữa các thực thể",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Đặc điểm hoặc thông tin mô tả một thực thể",
    },
    {
      id: "it004-q2",
      prompt:
        "Để tạo một bảng Khoa gồm (makhoa char (10), tenkhoa char (30), dienthoai char (10)) trong đó makhoa là khóa chính dùng lệnh nào dưới đây:",
      options: [
        {
          id: "a",
          text: "Create table Khoa (makhoa char (10) null primary key, tenkhoa char (30), dienthoai char (10))",
        },
        {
          id: "b",
          text: "Create table Khoa (makhoa char (10), tenkhoa char (30), dienthoai char (10))",
        },
        {
          id: "c",
          text: "Create table Khoa (makhoa char (10) not null primary key, tenkhoa char (30), dienthoai char (10))",
        },
        {
          id: "d",
          text: "Create table Khoa (makhoa char (10) not null, tenkhoa char (30), dienthoai char (10), constraint khoachinh foreign key(makhoa)",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — Create table Khoa (makhoa char (10) not null primary key, tenkhoa char (30), dienthoai char (10))",
    },
    {
      id: "it004-q3",
      prompt:
        "Trong mô hình quan hệ, thuộc tính của một quan hệ thường phải có giá trị thuộc một miền xác định. Điều này thể hiện khái niệm nào?",
      options: [
        {
          id: "a",
          text: "Tuple",
        },
        {
          id: "b",
          text: "Domain",
        },
        {
          id: "c",
          text: "Relation",
        },
        {
          id: "d",
          text: "Foreign Key",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Domain",
    },
    {
      id: "it004-q4",
      prompt: "Foreign Key trong mô hình quan hệ dùng để làm gì?",
      options: [
        {
          id: "a",
          text: "Tăng số lượng thuộc tính của bảng",
        },
        {
          id: "b",
          text: "Sắp xếp dữ liệu trong bảng",
        },
        {
          id: "c",
          text: "Xác định duy nhất mọi tuple trong cùng bảng",
        },
        {
          id: "d",
          text: "Liên kết một bảng với khóa được tham chiếu ở bảng khác",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Liên kết một bảng với khóa được tham chiếu ở bảng khác",
    },
    {
      id: "it004-q5",
      prompt: "Trong mô hình quan hệ, khóa chính (Primary Key) phải thỏa mãn điều kiện nào?",
      options: [
        {
          id: "a",
          text: "Xác định duy nhất mỗi tuple và không được NULL",
        },
        {
          id: "b",
          text: "Chỉ được chứa dữ liệu số",
        },
        {
          id: "c",
          text: "Luôn phải là khóa ngoại của bảng khác",
        },
        {
          id: "d",
          text: "Có thể trùng và có thể NULL",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Xác định duy nhất mỗi tuple và không được NULL",
    },
    {
      id: "it004-q6",
      prompt:
        "Cho bảng Khoa gồm (makhoa char (10), tenkhoa char (30), dienthoai char (11)). Để tạo bảng GiangVien gồm (magv int, hotengv char (30), luong decimal (5,2), makhoa char (10)) trong đó magv là khóa chính, makhoa là khóa phụ ta thực hiện lệnh nào dưới đây:",
      options: [
        {
          id: "a",
          text: "Create table GiangVien (magv int not null primary key, hotengv char (30), luong decimal (5,2), makhoa char (10), constraint fk_makhoa foreign key(makhoa) references Giangvien (makhoa))",
        },
        {
          id: "b",
          text: "Create table GiangVien (magv int not null primary key, hotengv char (30), luong decimal (5,2), makhoa char (10), constraint fk_makhoa primary key(makhoa) references Khoa(makhoa))",
        },
        {
          id: "c",
          text: "Create table GiangVien (magv int not null primary key, hotengv char (30), luong decimal (5,2), makhoa char (10), constraint fk_makhoa foreign key (makhoa) references Khoa(makhoa))",
        },
        {
          id: "d",
          text: "Create table GiangVien (magv int not null primary key, hotengv char (30), luong decimal (5,2), makhoa char (10), constraint fk_makhoa khoaphu (makhoa) references Khoa(makhoa))",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — Create table GiangVien (magv int not null primary key, hotengv char (30), luong decimal (5,2), makhoa char (10), constraint fk_makhoa foreign key (makhoa) references Khoa(makhoa))",
    },
    {
      id: "it004-q7",
      prompt: "Một superkey của quan hệ là gì?",
      options: [
        {
          id: "a",
          text: "Một khóa ngoại bắt buộc",
        },
        {
          id: "b",
          text: "Một tập thuộc tính có khả năng xác định duy nhất mỗi tuple",
        },
        {
          id: "c",
          text: "Một tập thuộc tính không thể dùng làm khóa",
        },
        {
          id: "d",
          text: "Một thuộc tính không bao giờ chứa NULL",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — Một tập thuộc tính có khả năng xác định duy nhất mỗi tuple",
    },
    {
      id: "it004-q8",
      prompt:
        "Bạn cần thêm một ràng buộc khóa ngoại vào bảng Orders để tham chiếu đến CustomerID trong bảng Customers. Lệnh nào là đúng?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Orders ADD CONSTRAINT CHECK_CustomerID CHECK (CustomerID IN Customers)",
        },
        {
          id: "b",
          text: "ALTER TABLE Orders ADD CONSTRAINT PK_Orders PRIMARY KEY (CustomerID)",
        },
        {
          id: "c",
          text: "ALTER TABLE Orders ADD CONSTRAINT FK_Orders_CustomerID FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)",
        },
        {
          id: "d",
          text: "ALTER TABLE Customers ADD CONSTRAINT FK_Customer FOREIGN KEY (CustomerID) REFERENCES Orders(CustomerID)",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — ALTER TABLE Orders ADD CONSTRAINT FK_Orders_CustomerID FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)",
    },
    {
      id: "it004-q9",
      prompt:
        "Xét lược đồ CSDL trường học với bảng Students (StudentID, StudentName, ClassID) và Classes (ClassID, ClassName). Lệnh nào thêm ràng buộc khóa ngoại cho ClassID trong Students, đồng thời đảm bảo khi xóa một lớp trong Classes, các sinh viên trong lớp đó được đặt ClassID thành NULL?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Students ADD CONSTRAINT FK_Student_Class FOREIGN KEY (ClassID) REFERENCES Classes(ClassID) ON DELETE CASCADE",
        },
        {
          id: "b",
          text: "ALTER TABLE Students ADD CONSTRAINT FK_Student_Class FOREIGN KEY (ClassID) REFERENCES Classes(ClassID) ON DELETE SET NULL",
        },
        {
          id: "c",
          text: "Tất cả đều sai",
        },
        {
          id: "d",
          text: "CREATE TABLE Students (StudentID int, StudentName varchar(50), ClassID int REFERENCES Classes(ClassID) ON DELETE NULL)",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — ALTER TABLE Students ADD CONSTRAINT FK_Student_Class FOREIGN KEY (ClassID) REFERENCES Classes(ClassID) ON DELETE SET NULL",
    },
    {
      id: "it004-q10",
      prompt: "Một lược đồ quan hệ đạt 3NF nhưng chưa đạt BCNF. Tình huống nào có thể xảy ra?",
      options: [
        {
          id: "a",
          text: "Có một phụ thuộc X→A trong đó X không là siêu khóa nhưng A là thuộc tính khóa",
        },
        {
          id: "b",
          text: "Có thuộc tính đa trị trong một ô",
        },
        {
          id: "c",
          text: "Có một phụ thuộc X→A trong đó X là siêu khóa",
        },
        {
          id: "d",
          text: "Không tồn tại khóa nào",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Có một phụ thuộc X→A trong đó X không là siêu khóa nhưng A là thuộc tính khóa",
    },
    {
      id: "it004-q11",
      prompt: "Trong mô hình dữ liệu quan hệ, mỗi cột của một bảng thường biểu diễn gì?",
      options: [
        {
          id: "a",
          text: "Một quan hệ khác",
        },
        {
          id: "b",
          text: "Một tuple",
        },
        {
          id: "c",
          text: "Một khóa chính bắt buộc",
        },
        {
          id: "d",
          text: "Một thuộc tính",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Một thuộc tính",
    },
    {
      id: "it004-q12",
      prompt: "Trong ERD, ký hiệu hình chữ nhật thường được dùng để biểu diễn thành phần nào?",
      options: [
        {
          id: "a",
          text: "Mối quan hệ",
        },
        {
          id: "b",
          text: "Thuộc tính",
        },
        {
          id: "c",
          text: "Khóa chính",
        },
        {
          id: "d",
          text: "Thực thể",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Thực thể",
    },
    {
      id: "it004-q13",
      prompt:
        "Ràng buộc toàn vẹn khóa (Key Integrity) đảm bảo điều gì trong cơ sở dữ liệu quan hệ?",
      options: [
        {
          id: "a",
          text: "Giá trị nằm trong miền cho phép",
        },
        {
          id: "b",
          text: "Dữ liệu được sắp xếp",
        },
        {
          id: "c",
          text: "Khóa chính duy nhất và không null",
        },
        {
          id: "d",
          text: "Liên kết giữa các bảng",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Khóa chính duy nhất và không null",
    },
    {
      id: "it004-q14",
      prompt:
        "Cho quan hệ R(A, B, C) với miền giá trị của A là các số nguyên từ 1 đến 100. Phát biểu nào thể hiện ràng buộc miền (Domain Constraint)?",
      options: [
        {
          id: "a",
          text: "A chỉ được nhận các giá trị thuộc miền đã quy định",
        },
        {
          id: "b",
          text: "A phải là Primary Key",
        },
        {
          id: "c",
          text: "A phải tham chiếu đến khóa chính của bảng khác",
        },
        {
          id: "d",
          text: "A phải có giá trị duy nhất",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — A chỉ được nhận các giá trị thuộc miền đã quy định",
    },
    {
      id: "it004-q15",
      prompt:
        "Cho R(A,B,C,D) với F={A→B, B→C, C→D}, A là khóa. Nguyên nhân khiến R không đạt 3NF là gì?",
      options: [
        {
          id: "a",
          text: "A không phải là siêu khóa",
        },
        {
          id: "b",
          text: "B→C và C→D tạo phụ thuộc bắc cầu từ khóa đến thuộc tính không khóa",
        },
        {
          id: "c",
          text: "A→B là phụ thuộc bộ phận",
        },
        {
          id: "d",
          text: "R không thể đạt 2NF",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — B→C và C→D tạo phụ thuộc bắc cầu từ khóa đến thuộc tính không khóa",
    },
    {
      id: "it004-q16",
      prompt:
        "Ràng buộc toàn vẹn thực thể (Entity Integrity) chủ yếu yêu cầu điều gì đối với Primary Key?",
      options: [
        {
          id: "a",
          text: "Phải là Foreign Key",
        },
        {
          id: "b",
          text: "Có thể chứa NULL",
        },
        {
          id: "c",
          text: "Không được chứa NULL",
        },
        {
          id: "d",
          text: "Phải là kiểu varchar",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Không được chứa NULL",
    },
    {
      id: "it004-q17",
      prompt:
        "Cho R(A, B, C) với F = {A -> B, B -> C}, A là khóa của R. Dạng chuẩn cao nhất của R là gì?",
      options: [
        {
          id: "a",
          text: "BCNF",
        },
        {
          id: "b",
          text: "2NF",
        },
        {
          id: "c",
          text: "1NF",
        },
        {
          id: "d",
          text: "3NF",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — 2NF",
    },
    {
      id: "it004-q18",
      prompt:
        "Cho R(A, B, C) với F = {A -> B}, trong đó A là khóa của R. R đang ở dạng chuẩn cao nhất nào?",
      options: [
        {
          id: "a",
          text: "3NF",
        },
        {
          id: "b",
          text: "BCNF",
        },
        {
          id: "c",
          text: "2NF",
        },
        {
          id: "d",
          text: "1NF",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — BCNF",
    },
    {
      id: "it004-q19",
      prompt:
        "Trong SQL Server, lệnh nào tạo bảng Orders với OrderID là khóa chính và CustomerID là khóa ngoại tham chiếu Customers(CustomerID)?",
      options: [
        {
          id: "a",
          text: "CREATE Orders (OrderID PRIMARY, CustomerID REFERENCES Customers)",
        },
        {
          id: "b",
          text: "CREATE TABLE Orders (OrderID int PRIMARY KEY, CustomerID int FOREIGN KEY REFERENCES Customers(CustomerID))",
        },
        {
          id: "c",
          text: "CREATE TABLE Orders (OrderID int, CustomerID int) FOREIGN KEY Customers(CustomerID)",
        },
        {
          id: "d",
          text: "INSERT TABLE Orders (OrderID int PRIMARY KEY, CustomerID int)",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — CREATE TABLE Orders (OrderID int PRIMARY KEY, CustomerID int FOREIGN KEY REFERENCES Customers(CustomerID))",
    },
    {
      id: "it004-q20",
      prompt:
        "Cho R(A, B, C) với F = {AB -> C}. Dạng chuẩn cao nhất của R là gì nếu không có phụ thuộc hàm nào khác?",
      options: [
        {
          id: "a",
          text: "3NF",
        },
        {
          id: "b",
          text: "1NF",
        },
        {
          id: "c",
          text: "2NF",
        },
        {
          id: "d",
          text: "BCNF",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — BCNF",
    },
    {
      id: "it004-q21",
      prompt:
        "Cho R(A,B,C) với F={AB→C, C→B}. Nếu các khóa là AB và AC, phụ thuộc C→B vi phạm BCNF nhưng vẫn thỏa 3NF vì lý do nào?",
      options: [
        {
          id: "a",
          text: "B là siêu khóa",
        },
        {
          id: "b",
          text: "B là thuộc tính khóa",
        },
        {
          id: "c",
          text: "C là thuộc tính khóa",
        },
        {
          id: "d",
          text: "C là siêu khóa",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — B là thuộc tính khóa",
    },
    {
      id: "it004-q22",
      prompt:
        "Trong mô hình quan hệ, một bảng có khóa chính gồm (StudentID, CourseID). Nếu Grade phụ thuộc vào cả StudentID và CourseID, nhận định nào đúng?",
      options: [
        {
          id: "a",
          text: "Grade là một khóa ngoại bắt buộc",
        },
        {
          id: "b",
          text: "Grade phụ thuộc bộ phận vào CourseID",
        },
        {
          id: "c",
          text: "Grade phụ thuộc bộ phận vào StudentID",
        },
        {
          id: "d",
          text: "Grade phụ thuộc đầy đủ vào khóa ghép",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Grade phụ thuộc đầy đủ vào khóa ghép",
    },
    {
      id: "it004-q23",
      prompt: "Candidate Key là gì?",
      options: [
        {
          id: "a",
          text: "Một superkey tối thiểu",
        },
        {
          id: "b",
          text: "Một superkey luôn chứa tất cả thuộc tính của bảng",
        },
        {
          id: "c",
          text: "Một khóa ngoại",
        },
        {
          id: "d",
          text: "Một thuộc tính bất kỳ",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Một superkey tối thiểu",
    },
    {
      id: "it004-q24",
      prompt: "Trong SQL Server, câu lệnh nào sau đây thuộc nhóm DML?",
      options: [
        {
          id: "a",
          text: "DROP TABLE",
        },
        {
          id: "b",
          text: "ALTER TABLE",
        },
        {
          id: "c",
          text: "UPDATE",
        },
        {
          id: "d",
          text: "CREATE TABLE",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — UPDATE",
    },
    {
      id: "it004-q25",
      prompt:
        "Một Order có thể chứa nhiều Product và một Product có thể xuất hiện trong nhiều Order. Khi chuyển ERD sang mô hình quan hệ, cách xử lý phù hợp là gì?",
      options: [
        {
          id: "a",
          text: "Tạo một bảng trung gian biểu diễn quan hệ N:N",
        },
        {
          id: "b",
          text: "Tạo một khóa ngoại duy nhất trong Order",
        },
        {
          id: "c",
          text: "Không cần tạo bảng nào thêm",
        },
        {
          id: "d",
          text: "Gộp Order và Product thành một bảng",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Tạo một bảng trung gian biểu diễn quan hệ N:N",
    },
    {
      id: "it004-q26",
      prompt:
        "Cho bảng Employees(EmployeeID, EmployeeName, Salary). Lệnh nào thêm khóa chính EmployeeID vào bảng đã tồn tại?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Employees ADD CONSTRAINT PK_Employees PRIMARY KEY (EmployeeID)",
        },
        {
          id: "b",
          text: "UPDATE Employees ADD PRIMARY KEY (EmployeeID)",
        },
        {
          id: "c",
          text: "INSERT INTO Employees ADD PRIMARY KEY (EmployeeID)",
        },
        {
          id: "d",
          text: "ALTER COLUMN Employees ADD PRIMARY KEY EmployeeID",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — ALTER TABLE Employees ADD CONSTRAINT PK_Employees PRIMARY KEY (EmployeeID)",
    },
    {
      id: "it004-q27",
      prompt: "Ràng buộc toàn vẹn tham chiếu (Referential Integrity) đảm bảo điều gì?",
      options: [
        {
          id: "a",
          text: "Mọi cột phải có giá trị duy nhất",
        },
        {
          id: "b",
          text: "Mọi bảng phải có cùng số lượng cột",
        },
        {
          id: "c",
          text: "Mọi khóa chính phải là số nguyên",
        },
        {
          id: "d",
          text: "Giá trị Foreign Key phải phù hợp với giá trị khóa được tham chiếu hoặc NULL nếu được phép",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Giá trị Foreign Key phải phù hợp với giá trị khóa được tham chiếu hoặc NULL nếu được phép",
    },
    {
      id: "it004-q28",
      prompt: "Degree của một quan hệ được xác định bởi yếu tố nào?",
      options: [
        {
          id: "a",
          text: "Số lượng bảng trong CSDL",
        },
        {
          id: "b",
          text: "Số lượng tuple trong quan hệ",
        },
        {
          id: "c",
          text: "Số lượng khóa ngoại",
        },
        {
          id: "d",
          text: "Số lượng thuộc tính của quan hệ",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Số lượng thuộc tính của quan hệ",
    },
    {
      id: "it004-q29",
      prompt: "Ràng buộc kiểu:",
      options: [
        {
          id: "a",
          text: "Mối quan hệ giữa các thực thể dữ liệu",
        },
        {
          id: "b",
          text: "Quy tắc đặt tên cơ sở dữ liệu",
        },
        {
          id: "c",
          text: "Mô tả tính chất của các thuộc tính khi tạo lập CSDL",
        },
        {
          id: "d",
          text: "Quy tắc truy nhập cơ sở dữ liệu",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Mô tả tính chất của các thuộc tính khi tạo lập CSDL",
    },
    {
      id: "it004-q30",
      prompt: "Trong một quan hệ, mỗi hàng (tuple) biểu diễn điều gì?",
      options: [
        {
          id: "a",
          text: "Một miền giá trị",
        },
        {
          id: "b",
          text: "Một thể hiện/bản ghi của quan hệ",
        },
        {
          id: "c",
          text: "Một khóa ngoại",
        },
        {
          id: "d",
          text: "Một thuộc tính của bảng",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Một thể hiện/bản ghi của quan hệ",
    },
    {
      id: "it004-q31",
      prompt: "Trong ERD, khóa chính (Primary Key) của một thực thể có vai trò gì?",
      options: [
        {
          id: "a",
          text: "Bắt buộc phải là khóa ngoại",
        },
        {
          id: "b",
          text: "Chỉ dùng để lưu mô tả của thực thể",
        },
        {
          id: "c",
          text: "Cho phép mọi bản ghi có cùng giá trị",
        },
        {
          id: "d",
          text: "Xác định duy nhất mỗi thể hiện của thực thể",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Xác định duy nhất mỗi thể hiện của thực thể",
    },
    {
      id: "it004-q32",
      prompt: "Trong ký pháp ER truyền thống, ký hiệu hình thoi thường biểu diễn thành phần nào?",
      options: [
        {
          id: "a",
          text: "Khóa ngoại",
        },
        {
          id: "b",
          text: "Thực thể",
        },
        {
          id: "c",
          text: "Mối quan hệ",
        },
        {
          id: "d",
          text: "Thuộc tính",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Mối quan hệ",
    },
    {
      id: "it004-q33",
      prompt:
        "Cho bảng Customers(CustomerID, CustomerName). Lệnh nào thêm ràng buộc UNIQUE cho CustomerName?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Customers ADD CONSTRAINT UQ_CustomerName UNIQUE (CustomerName)",
        },
        {
          id: "b",
          text: "ALTER TABLE Customers ADD CONSTRAINT UQ_CustomerName PRIMARY (CustomerName)",
        },
        {
          id: "c",
          text: "CREATE UNIQUE COLUMN CustomerName IN Customers",
        },
        {
          id: "d",
          text: "UPDATE Customers ADD UNIQUE (CustomerName)",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — ALTER TABLE Customers ADD CONSTRAINT UQ_CustomerName UNIQUE (CustomerName)",
    },
    {
      id: "it004-q34",
      prompt: "Hãy chọn phương án ứng với ý nghĩa của nhóm lệnh BEGIN TRAN KHỐI LỆNH COMMIT.",
      options: [
        {
          id: "a",
          text: "Đê thực hiện mở transaction bằng lệnh BEGIN TRAN và kết thúc bằng lệnh COMMIT – sau lệnh này những cập nhật dữ liệu sẽ được xác nhận vào trong database, transaction được đóng lại và các khóa (lock) trên các bảng được cập nhật được thả ra ta thực hiện lệnh",
        },
        {
          id: "b",
          text: "Đê thực hiện đóng transaction bằng lệnh BEGIN TRAN và mở bằng lệnh COMMIT – sau lệnh này những cập nhật dữ liệu sẽ được xác nhận vào trong database, transaction được đóng lại và các khóa (lock) trên các bảng được cập nhật được thả ra ta thực hiện lệnh",
        },
        {
          id: "c",
          text: "Đê thực hiện mở transaction bằng lệnh COMMIT và kết thúc bằng lệnh BEGIN – sau lệnh này những cập nhật dữ liệu sẽ được xác nhận vào trong database, transaction được đóng lại và các khóa (lock) trên các bảng được cập nhật được thả ra ta thực hiện lệnh",
        },
        {
          id: "d",
          text: "Không có lệnh này trong SQL SERVER",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Đê thực hiện mở transaction bằng lệnh BEGIN TRAN và kết thúc bằng lệnh COMMIT – sau lệnh này những cập nhật dữ liệu sẽ được xác nhận vào trong database, transaction được đóng lại và các khóa (lock) trên các bảng được cập nhật được thả ra ta thực hiện lệnh",
    },
    {
      id: "it004-q35",
      prompt: "Trong ERD, Cardinality dùng để mô tả điều gì?",
      options: [
        {
          id: "a",
          text: "Tên của khóa chính",
        },
        {
          id: "b",
          text: "Kiểu dữ liệu của thuộc tính",
        },
        {
          id: "c",
          text: "Thứ tự tạo bảng",
        },
        {
          id: "d",
          text: "Số lượng thể hiện của một thực thể có thể liên kết với thể hiện của thực thể khác",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Số lượng thể hiện của một thực thể có thể liên kết với thể hiện của thực thể khác",
    },
    {
      id: "it004-q36",
      prompt:
        "Cho bảng Students(StudentID, StudentName, ClassID). Lệnh nào thêm khóa ngoại ClassID tham chiếu đến Classes(ClassID)?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Students ADD CONSTRAINT FK_Student_Class FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)",
        },
        {
          id: "b",
          text: "CREATE FOREIGN KEY ClassID FROM Students REFERENCES Classes",
        },
        {
          id: "c",
          text: "UPDATE Students ADD CONSTRAINT FK_Student_Class REFERENCES Classes(ClassID)",
        },
        {
          id: "d",
          text: "ALTER TABLE Classes ADD FOREIGN KEY Students(ClassID)",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — ALTER TABLE Students ADD CONSTRAINT FK_Student_Class FOREIGN KEY (ClassID) REFERENCES Classes(ClassID)",
    },
    {
      id: "it004-q37",
      prompt:
        "Xét lược đồ CSDL công ty với bảng Departments (DepartmentID, DepartmentName). Các lệnh nào sau đây tạo bảng này với DepartmentID là khóa chính?",
      options: [
        {
          id: "a",
          text: "CREATE TABLE Departments (DepartmentID PRIMARY KEY int, DepartmentName varchar(50)).",
        },
        {
          id: "b",
          text: "ALTER TABLE Departments ADD DepartmentID PRIMARY KEY",
        },
        {
          id: "c",
          text: "INSERT INTO Departments (DepartmentID, DepartmentName) VALUES (1, 'HR')",
        },
        {
          id: "d",
          text: "Tất cả đều sai",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — CREATE TABLE Departments (DepartmentID PRIMARY KEY int, DepartmentName varchar(50)).",
    },
    {
      id: "it004-q38",
      prompt: "Trong ERD, Relationship (mối quan hệ) dùng để biểu diễn gì?",
      options: [
        {
          id: "a",
          text: "Sự liên kết giữa các thực thể",
        },
        {
          id: "b",
          text: "Đặc điểm của một thuộc tính",
        },
        {
          id: "c",
          text: "Kiểu dữ liệu của thuộc tính",
        },
        {
          id: "d",
          text: "Tên của bảng",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Sự liên kết giữa các thực thể",
    },
    {
      id: "it004-q39",
      prompt: "Cho R(A, B, C) với F = {AB -> C, A -> B}. R vi phạm điều kiện của 2NF vì lý do nào?",
      options: [
        {
          id: "a",
          text: "C phụ thuộc bộ phận vào một phần của khóa AB",
        },
        {
          id: "b",
          text: "Không vi phạm 2NF",
        },
        {
          id: "c",
          text: "A không phải là thuộc tính khóa",
        },
        {
          id: "d",
          text: "C phụ thuộc bắc cầu vào khóa AB",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — C phụ thuộc bộ phận vào một phần của khóa AB",
    },
    {
      id: "it004-q40",
      prompt:
        "Cho R(A, B, C) với F = {AB -> C, C -> A}. Trong phụ thuộc C -> A, nếu C không phải là siêu khóa nhưng A là thuộc tính khóa, điều kiện nào của 3NF được thỏa mãn?",
      options: [
        {
          id: "a",
          text: "Không thỏa mãn 3NF",
        },
        {
          id: "b",
          text: "Cả hai vế đều phải là khóa",
        },
        {
          id: "c",
          text: "Vế trái là siêu khóa",
        },
        {
          id: "d",
          text: "Vế phải là thuộc tính khóa",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Vế phải là thuộc tính khóa",
    },
    {
      id: "it004-q41",
      prompt: "Lệnh nào thêm ràng buộc CHECK để Salary phải lớn hơn hoặc bằng 0?",
      options: [
        {
          id: "a",
          text: "UPDATE Employees ADD CHECK Salary >= 0",
        },
        {
          id: "b",
          text: "ALTER TABLE Employees ADD CONSTRAINT CK_Salary CHECK (Salary >= 0)",
        },
        {
          id: "c",
          text: "ALTER TABLE Employees ADD CONSTRAINT CK_Salary FOREIGN KEY (Salary >= 0)",
        },
        {
          id: "d",
          text: "CREATE CHECK Salary >= 0 ON Employees",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — ALTER TABLE Employees ADD CONSTRAINT CK_Salary CHECK (Salary >= 0)",
    },
    {
      id: "it004-q42",
      prompt: "Một thực thể yếu (Weak Entity) thường có đặc điểm nào?",
      options: [
        {
          id: "a",
          text: "Phụ thuộc vào một thực thể khác để được xác định",
        },
        {
          id: "b",
          text: "Không phụ thuộc vào bất kỳ thực thể nào",
        },
        {
          id: "c",
          text: "Luôn có quan hệ N:N",
        },
        {
          id: "d",
          text: "Luôn có khóa chính độc lập hoàn toàn",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Phụ thuộc vào một thực thể khác để được xác định",
    },
    {
      id: "it004-q43",
      prompt: "Cardinality của một quan hệ là gì?",
      options: [
        {
          id: "a",
          text: "Số lượng tuple trong quan hệ",
        },
        {
          id: "b",
          text: "Số lượng miền dữ liệu",
        },
        {
          id: "c",
          text: "Số lượng thuộc tính của quan hệ",
        },
        {
          id: "d",
          text: "Số lượng khóa chính",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Số lượng tuple trong quan hệ",
    },
    {
      id: "it004-q44",
      prompt:
        "An toàn dữ liệu trong SQL Server là gì? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra ngoài hoặc từ ngoài vào",
        },
        {
          id: "b",
          text: "Tính nhất quán và toàn vẹn dữ liệu.",
        },
        {
          id: "c",
          text: "Dễ dàng cho công việc bảo trì dữ liệu.",
        },
        {
          id: "d",
          text: "Thống nhất các tiêu chuẩn, thủ tục và các biện pháp bảo vệ, an toàn dữ liệu",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra ngoài hoặc từ ngoài vào",
    },
    {
      id: "it004-q45",
      prompt: "Nếu một bảng có nhiều Candidate Key, Primary Key được chọn như thế nào?",
      options: [
        {
          id: "a",
          text: "Không được phép có Candidate Key",
        },
        {
          id: "b",
          text: "Bắt buộc chọn tất cả Candidate Key làm Primary Key",
        },
        {
          id: "c",
          text: "Primary Key phải là khóa ngoại",
        },
        {
          id: "d",
          text: "Có thể chọn một Candidate Key làm Primary Key",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Có thể chọn một Candidate Key làm Primary Key",
    },
    {
      id: "it004-q46",
      prompt: "Hãy chọn phương án ứng với cú pháp được sử dụng để tạo ràng buộc Check:",
      options: [
        {
          id: "a",
          text: "CHECK tên ràng buộc CONSTRAINT (điều kiện)",
        },
        {
          id: "b",
          text: "CONSTRAINT thuộc tính CHECK (điều kiện)",
        },
        {
          id: "c",
          text: "CONSTRAINT tên ràng buộc CHECK (điều kiện)",
        },
        {
          id: "d",
          text: "CONSTRAINT tên ràng buộc CHK (điều kiện)",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — CONSTRAINT tên ràng buộc CHECK (điều kiện)",
    },
    {
      id: "it004-q47",
      prompt: "Ràng buộc logic:",
      options: [
        {
          id: "a",
          text: "Các phép so sánh",
        },
        {
          id: "b",
          text: "Mối quan hệ giữa các thuộc tính được biểu diễn bằng các biểu thức toán học)",
        },
        {
          id: "c",
          text: "Mối quan hệ giữa các thuộc tính được biểu diễn bằng các phụ thuộc hàm",
        },
        {
          id: "d",
          text: "Các phép toán quan hệ",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — Mối quan hệ giữa các thuộc tính được biểu diễn bằng các phụ thuộc hàm",
    },
    {
      id: "it004-q48",
      prompt: "Trong mô hình ERD, Entity (thực thể) được dùng để biểu diễn gì?",
      options: [
        {
          id: "a",
          text: "Một đối tượng hoặc khái niệm cần được quản lý trong hệ thống",
        },
        {
          id: "b",
          text: "Một câu lệnh SQL",
        },
        {
          id: "c",
          text: "Một kiểu dữ liệu",
        },
        {
          id: "d",
          text: "Một phép nối giữa hai bảng",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Một đối tượng hoặc khái niệm cần được quản lý trong hệ thống",
    },
    {
      id: "it004-q49",
      prompt:
        "Cho quan hệ Students(StudentID, StudentName, Age). Degree của quan hệ Students là bao nhiêu?",
      options: [
        {
          id: "a",
          text: "2",
        },
        {
          id: "b",
          text: "Phụ thuộc vào số sinh viên",
        },
        {
          id: "c",
          text: "Phụ thuộc vào số khóa ngoại",
        },
        {
          id: "d",
          text: "3",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — 3",
    },
    {
      id: "it004-q50",
      prompt:
        "Một Student có thể có nhiều PhoneNumber. Nếu mô hình hóa PhoneNumber như một thuộc tính của Student, đây là loại thuộc tính nào?",
      options: [
        {
          id: "a",
          text: "Thuộc tính khóa",
        },
        {
          id: "b",
          text: "Thuộc tính đa trị",
        },
        {
          id: "c",
          text: "Thuộc tính đơn trị",
        },
        {
          id: "d",
          text: "Thuộc tính dẫn xuất",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Thuộc tính đa trị",
    },
    {
      id: "it004-q51",
      prompt:
        "Cho bảng Students(StudentID, ClassID) và Classes(ClassID). Muốn đảm bảo mọi ClassID trong Students phải tồn tại trong Classes, cần dùng ràng buộc nào?",
      options: [
        {
          id: "a",
          text: "DEFAULT",
        },
        {
          id: "b",
          text: "UNIQUE",
        },
        {
          id: "c",
          text: "CHECK",
        },
        {
          id: "d",
          text: "FOREIGN KEY",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — FOREIGN KEY",
    },
    {
      id: "it004-q52",
      prompt: "Các đặc điểm nào sau đây là đúng về cơ sở dữ liệu quan hệ?",
      options: [
        {
          id: "a",
          text: "Sử dụng khóa chính để xác định duy nhất mỗi hàng",
        },
        {
          id: "b",
          text: "Tất cả đáp án đều đúng",
        },
        {
          id: "c",
          text: "Hỗ trợ các mối quan hệ giữa các bảng thông qua khóa ngoại",
        },
        {
          id: "d",
          text: "Dữ liệu được lưu trữ trong các bảng",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Tất cả đáp án đều đúng",
    },
    {
      id: "it004-q53",
      prompt: "Ưu điểm cơ sở dữ liệu:",
      options: [
        {
          id: "a",
          text: "Giảm dư thừa, nhất quán và toàn vẹn của dữ liệu",
        },
        {
          id: "b",
          text: "Các thuộc tính được mô tả trong nhiều tệp dữ liệu khác nhau",
        },
        {
          id: "c",
          text: "Khả năng xuất hiện mâu thuẫn và không nhất quán dữ liệu",
        },
        {
          id: "d",
          text: "Xuất hiện dị thường thông tin",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Giảm dư thừa, nhất quán và toàn vẹn của dữ liệu",
    },
    {
      id: "it004-q54",
      prompt: "Lệnh nào tạo bảng Departments với DepartmentID là khóa chính?",
      options: [
        {
          id: "a",
          text: "CREATE Departments (DepartmentID int KEY, DepartmentName varchar(50))",
        },
        {
          id: "b",
          text: "INSERT TABLE Departments (DepartmentID PRIMARY KEY, DepartmentName varchar(50))",
        },
        {
          id: "c",
          text: "CREATE TABLE Departments (DepartmentID int PRIMARY KEY, DepartmentName varchar(50))",
        },
        {
          id: "d",
          text: "CREATE TABLE Departments (DepartmentID int, DepartmentName varchar(50)) PRIMARY",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — CREATE TABLE Departments (DepartmentID int PRIMARY KEY, DepartmentName varchar(50))",
    },
    {
      id: "it004-q55",
      prompt: "Cho bảng Students có 100 bản ghi. Cardinality của quan hệ Students là bao nhiêu?",
      options: [
        {
          id: "a",
          text: "100",
        },
        {
          id: "b",
          text: "Không xác định",
        },
        {
          id: "c",
          text: "3",
        },
        {
          id: "d",
          text: "Phụ thuộc vào số thuộc tính",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — 100",
    },
    {
      id: "it004-q56",
      prompt: "Cho R(A,B,C,D) với F={A→B, B→C, C→D}. Khẳng định nào đúng?",
      options: [
        {
          id: "a",
          text: "A là khóa và R đạt BCNF",
        },
        {
          id: "b",
          text: "B là khóa của R",
        },
        {
          id: "c",
          text: "A là khóa nhưng R chỉ đạt 2NF",
        },
        {
          id: "d",
          text: "AB là khóa duy nhất",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — A là khóa và R đạt BCNF",
    },
    {
      id: "it004-q57",
      prompt:
        "Cho bảng Students(StudentID, StudentName, Age). Lệnh nào xóa ràng buộc có tên CK_Student_Age?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Students DELETE CONSTRAINT CK_Student_Age",
        },
        {
          id: "b",
          text: "ALTER TABLE Students DROP CONSTRAINT CK_Student_Age",
        },
        {
          id: "c",
          text: "DROP CHECK CK_Student_Age FROM Students",
        },
        {
          id: "d",
          text: "DELETE CONSTRAINT CK_Student_Age FROM Students",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — ALTER TABLE Students DROP CONSTRAINT CK_Student_Age",
    },
    {
      id: "it004-q58",
      prompt:
        "Cho quan hệ Employee(EmployeeID, Email, EmployeeName), trong đó EmployeeID và Email đều có giá trị duy nhất. Candidate Key có thể là gì?",
      options: [
        {
          id: "a",
          text: "EmployeeID và EmployeeName bắt buộc cùng nhau",
        },
        {
          id: "b",
          text: "EmployeeID và Email",
        },
        {
          id: "c",
          text: "Chỉ EmployeeName",
        },
        {
          id: "d",
          text: "Tất cả các thuộc tính",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — EmployeeID và Email",
    },
    {
      id: "it004-q59",
      prompt: "Trong ký pháp ER truyền thống, ký hiệu hình elip thường biểu diễn thành phần nào?",
      options: [
        {
          id: "a",
          text: "Bảng trung gian",
        },
        {
          id: "b",
          text: "Thuộc tính",
        },
        {
          id: "c",
          text: "Mối quan hệ",
        },
        {
          id: "d",
          text: "Thực thể",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Thuộc tính",
    },
    {
      id: "it004-q60",
      prompt:
        "Khi thiết kế ERD cho hệ thống bán hàng, Product có ProductID, ProductName và Price; Order có OrderID và OrderDate. Quan hệ giữa Order và Product là N:N. Thành phần nào nên được thêm để biểu diễn số lượng sản phẩm trong từng đơn hàng?",
      options: [
        {
          id: "a",
          text: "Tạo thực thể/bảng trung gian OrderDetail và đặt Quantity tại đó",
        },
        {
          id: "b",
          text: "Thêm Quantity vào Order",
        },
        {
          id: "c",
          text: "Không thể biểu diễn Quantity trong ERD",
        },
        {
          id: "d",
          text: "Thêm Quantity vào Product",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Tạo thực thể/bảng trung gian OrderDetail và đặt Quantity tại đó",
    },
    {
      id: "it004-q61",
      prompt: "Lệnh nào tạo bảng Students và quy định StudentName không được nhận giá trị NULL?",
      options: [
        {
          id: "a",
          text: "CREATE TABLE Students (StudentID int, StudentName varchar(50) NULL ONLY)",
        },
        {
          id: "b",
          text: "CREATE TABLE Students (StudentID int, StudentName varchar(50) NOT NULL)",
        },
        {
          id: "c",
          text: "CREATE TABLE Students (StudentID int, StudentName varchar(50) CHECK NOT NULL)",
        },
        {
          id: "d",
          text: "CREATE Students (StudentID int, StudentName varchar(50) REQUIRED)",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — CREATE TABLE Students (StudentID int, StudentName varchar(50) NOT NULL)",
    },
    {
      id: "it004-q62",
      prompt:
        "Cho R(A, B, C) với F = {A -> B, B -> C}. Phụ thuộc hàm B -> C thuộc bao đóng F+ vì lý do nào?",
      options: [
        {
          id: "a",
          text: "Nó là một phụ thuộc hàm ban đầu trong F",
        },
        {
          id: "b",
          text: "Vì B là khóa",
        },
        {
          id: "c",
          text: "Nó chỉ được suy ra bằng luật bắc cầu",
        },
        {
          id: "d",
          text: "Nó không thuộc F+",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Nó là một phụ thuộc hàm ban đầu trong F",
    },
    {
      id: "it004-q63",
      prompt:
        "Cho bảng Orders(OrderID, CustomerID, Total). Muốn không cho phép Total âm, ràng buộc nào phù hợp nhất?",
      options: [
        {
          id: "a",
          text: "UNIQUE (Total)",
        },
        {
          id: "b",
          text: "FOREIGN KEY (Total)",
        },
        {
          id: "c",
          text: "CHECK (Total >= 0)",
        },
        {
          id: "d",
          text: "DEFAULT (Total >= 0)",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — CHECK (Total >= 0)",
    },
    {
      id: "it004-q64",
      prompt:
        "Trong quan hệ 1:N giữa Department và Employee, khóa ngoại thường được đặt ở bảng nào khi chuyển sang mô hình quan hệ?",
      options: [
        {
          id: "a",
          text: "Không cần khóa ngoại",
        },
        {
          id: "b",
          text: "Bảng Department",
        },
        {
          id: "c",
          text: "Cả hai bảng bắt buộc phải có khóa ngoại của nhau",
        },
        {
          id: "d",
          text: "Bảng Employee",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Bảng Employee",
    },
    {
      id: "it004-q65",
      prompt:
        "Cho R(A, B, C, D) với F = {AB -> C, C -> D}. Muốn kiểm tra AB có phải là khóa của R hay không, cần tính AB+ và so sánh với tập nào?",
      options: [
        {
          id: "a",
          text: "Chỉ với {C, D}",
        },
        {
          id: "b",
          text: "Với tập phụ thuộc hàm F",
        },
        {
          id: "c",
          text: "Với tập thuộc tính R = {A, B, C, D}",
        },
        {
          id: "d",
          text: "Chỉ với {A, B}",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Với tập thuộc tính R = {A, B, C, D}",
    },
    {
      id: "it004-q66",
      prompt:
        "Cho lược đồ quan hệ R(A, B, C, D) với tập phụ thuộc hàm F = {A -> B, B -> C, C -> D}. Bao đóng A+ là tập nào?",
      options: [
        {
          id: "a",
          text: "{A, B, C}",
        },
        {
          id: "b",
          text: "{A, B, C, D}",
        },
        {
          id: "c",
          text: "{A, B}",
        },
        {
          id: "d",
          text: "{A, C, D}",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — {A, B, C, D}",
    },
    {
      id: "it004-q67",
      prompt: "Lệnh nào tạo bảng Courses với CourseID tự động tăng trong SQL Server?",
      options: [
        {
          id: "a",
          text: "CREATE TABLE Courses (CourseID int IDENTITY(1,1) PRIMARY KEY, CourseName varchar(100))",
        },
        {
          id: "b",
          text: "CREATE TABLE Courses (CourseID int AUTOINCREMENT PRIMARY KEY, CourseName varchar(100))",
        },
        {
          id: "c",
          text: "CREATE TABLE Courses (CourseID int AUTO_INCREMENT PRIMARY KEY, CourseName varchar(100))",
        },
        {
          id: "d",
          text: "CREATE TABLE Courses (CourseID SERIAL PRIMARY KEY, CourseName varchar(100))",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — CREATE TABLE Courses (CourseID int IDENTITY(1,1) PRIMARY KEY, CourseName varchar(100))",
    },
    {
      id: "it004-q68",
      prompt:
        "Cho bảng Students(StudentID, StudentName). Lệnh nào thêm một cột Age kiểu int vào bảng?",
      options: [
        {
          id: "a",
          text: "CREATE TABLE Students ADD Age int",
        },
        {
          id: "b",
          text: "INSERT COLUMN Age int INTO Students",
        },
        {
          id: "c",
          text: "UPDATE TABLE Students ADD Age int",
        },
        {
          id: "d",
          text: "ALTER TABLE Students ADD Age int",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — ALTER TABLE Students ADD Age int",
    },
    {
      id: "it004-q69",
      prompt: "Ràng buộc giải tích:",
      options: [
        {
          id: "a",
          text: "Mối quan hệ giữa các thuộc tính được biểu diễn bằng các biểu thức toán học)",
        },
        {
          id: "b",
          text: "Các phép toán đại số quan hệ",
        },
        {
          id: "c",
          text: "Mô tả tính chất của các thuộc tính khi tạo lập CSDL",
        },
        {
          id: "d",
          text: "Quy tắc biểu diễn cấu trúc dữ liệu",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Mối quan hệ giữa các thuộc tính được biểu diễn bằng các biểu thức toán học)",
    },
    {
      id: "it004-q70",
      prompt: "Trong SQL Server, biểu thức nào dùng để kiểm tra một cột có giá trị NULL?",
      options: [
        {
          id: "a",
          text: "Column IS NULL",
        },
        {
          id: "b",
          text: "Column = NULL",
        },
        {
          id: "c",
          text: "Column LIKE NULL",
        },
        {
          id: "d",
          text: "Column == NULL",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Column IS NULL",
    },
    {
      id: "it004-q71",
      prompt: "Phép chiếu (Projection) trong đại số quan hệ dùng để thực hiện thao tác nào?",
      options: [
        {
          id: "a",
          text: "Chọn các hàng thỏa điều kiện",
        },
        {
          id: "b",
          text: "Xóa toàn bộ quan hệ",
        },
        {
          id: "c",
          text: "Chọn các cột/thuộc tính cần lấy",
        },
        {
          id: "d",
          text: "Kết hợp hai quan hệ theo điều kiện",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Chọn các cột/thuộc tính cần lấy",
    },
    {
      id: "it004-q72",
      prompt:
        "Khi một yêu cầu truy vấn cần thông tin từ hai bảng Student và Class, bước quan trọng trước khi viết JOIN là gì?",
      options: [
        {
          id: "a",
          text: "Chuyển tất cả dữ liệu về một bảng",
        },
        {
          id: "b",
          text: "Xác định thuộc tính dùng để liên kết hai bảng",
        },
        {
          id: "c",
          text: "Sắp xếp cả hai bảng theo tên",
        },
        {
          id: "d",
          text: "Xóa khóa ngoại khỏi một trong hai bảng",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Xác định thuộc tính dùng để liên kết hai bảng",
    },
    {
      id: "it004-q73",
      prompt:
        "Hãy cho biết Cơ sở dữ liệu Model dùng để làm gì? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Lưu trữ tất cả thông tin hệ thống của Sql Server",
        },
        {
          id: "b",
          text: "Lưu trữ các đối tượng tạm thời",
        },
        {
          id: "c",
          text: "Để lập lịch hoặc một số công việc thường nhật",
        },
        {
          id: "d",
          text: "CSDL mẫu để tạo ra các CSDL người dùng",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — CSDL mẫu để tạo ra các CSDL người dùng",
    },
    {
      id: "it004-q74",
      prompt: "Cơ sở dữ liệu là tài nguyên thông tin chung, nghĩa là:",
      options: [
        {
          id: "a",
          text: "Nhiều người sử dụng, không phụ thuộc vị trí địa lý, có phân quyền",
        },
        {
          id: "b",
          text: "Truy nhập trực tuyến",
        },
        {
          id: "c",
          text: "Nhiều người sử dụng",
        },
        {
          id: "d",
          text: "Nhiều người sử dụng, có phân quyền",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Nhiều người sử dụng, không phụ thuộc vị trí địa lý, có phân quyền",
    },
    {
      id: "it004-q75",
      prompt: "Ánh xạ quan niệm trong:",
      options: [
        {
          id: "a",
          text: "Bảo đảm cấu trúc lưu trữ của mô hình dữ liệu không thay đổi",
        },
        {
          id: "b",
          text: "Bảo đảm tính phụ thuộc lẫn nhau giữa mô hình trong và mô hình ngoài",
        },
        {
          id: "c",
          text: "Bảo đảm tính độc lập của dữ liệu",
        },
        {
          id: "d",
          text: "Bảo đảm cấu trúc lưu trữ của CSDL khi có sự thay đổi",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Bảo đảm tính độc lập của dữ liệu",
    },
    {
      id: "it004-q76",
      prompt: "Các lệnh nào sau đây thuộc nhóm DML trong SQL Server?",
      options: [
        {
          id: "a",
          text: "Tất cả đều đúng",
        },
        {
          id: "b",
          text: "DELECT",
        },
        {
          id: "c",
          text: "SELECT",
        },
        {
          id: "d",
          text: "UPDATE",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Tất cả đều đúng",
    },
    {
      id: "it004-q77",
      prompt:
        "Cho bảng Customers(CustomerID, CustomerName) và Orders(OrderID, CustomerID). Từ khóa EXISTS dùng để kiểm tra điều gì?",
      options: [
        {
          id: "a",
          text: "Kiểm tra một cột có tồn tại trong bảng hay không",
        },
        {
          id: "b",
          text: "Kiểm tra bảng có khóa chính hay không",
        },
        {
          id: "c",
          text: "Kiểm tra dữ liệu có phải NULL hay không",
        },
        {
          id: "d",
          text: "Kiểm tra một truy vấn con có trả về ít nhất một dòng hay không",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Kiểm tra một truy vấn con có trả về ít nhất một dòng hay không",
    },
    {
      id: "it004-q78",
      prompt:
        "Cho quan hệ R có 8 tuple và S có 5 tuple. Nếu thực hiện R × S rồi phép chọn với một điều kiện bất kỳ, số tuple kết quả tối đa là bao nhiêu?",
      options: [
        {
          id: "a",
          text: "40",
        },
        {
          id: "b",
          text: "13",
        },
        {
          id: "c",
          text: "5",
        },
        {
          id: "d",
          text: "8",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — 40",
    },
    {
      id: "it004-q79",
      prompt:
        "Hãy cho biết Cơ sở dữ liệu Tempdb dùng để làm gì? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "CSDL mẫu để tạo ra các CSDL người dùng",
        },
        {
          id: "b",
          text: "Lưu trữ tất cả thông tin hệ thống của Sql Server",
        },
        {
          id: "c",
          text: "Để lập lịch hoặc một số công việc thường nhật",
        },
        {
          id: "d",
          text: "Lưu trữ các đối tượng tạm thời",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Lưu trữ các đối tượng tạm thời",
    },
    {
      id: "it004-q80",
      prompt:
        "Hãy cho biết Cơ sở dữ liệu Master dùng để làm gì? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Để lập lịch hoặc một số công việc thường nhật",
        },
        {
          id: "b",
          text: "CSDL mẫu để tạo ra các CSDL người dùng",
        },
        {
          id: "c",
          text: "Lưu trữ tất cả thông tin hệ thống của Sql Server",
        },
        {
          id: "d",
          text: "Lưu trữ các đối tượng tạm thời",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Lưu trữ tất cả thông tin hệ thống của Sql Server",
    },
    {
      id: "it004-q81",
      prompt:
        "Trong ERD, nếu mỗi Employee bắt buộc phải thuộc một Department, còn Department có thể có nhiều Employee, ràng buộc tham gia của Employee là gì?",
      options: [
        {
          id: "a",
          text: "Department tham gia toàn phần vào mọi quan hệ",
        },
        {
          id: "b",
          text: "Employee tham gia toàn phần vào quan hệ với Department",
        },
        {
          id: "c",
          text: "Không có ràng buộc tham gia",
        },
        {
          id: "d",
          text: "Employee tham gia bộ phận vào quan hệ với Department",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — Employee tham gia toàn phần vào quan hệ với Department",
    },
    {
      id: "it004-q82",
      prompt: "Cho R(A, B, C, D) với F = {A -> B, B -> C, C -> D}. Thuộc tính nào là khóa của R?",
      options: [
        {
          id: "a",
          text: "C",
        },
        {
          id: "b",
          text: "B",
        },
        {
          id: "c",
          text: "D",
        },
        {
          id: "d",
          text: "A",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — A",
    },
    {
      id: "it004-q83",
      prompt: "An toàn dữ liệu có thể hiểu là:",
      options: [
        {
          id: "a",
          text: "Dễ dàng cho công việc bảo trì dữ liệu",
        },
        {
          id: "b",
          text: "Tính nhất quán và toàn vẹn dữ liệu",
        },
        {
          id: "c",
          text: "Thống nhất các tiêu chuẩn, thủ tục và các biện pháp bảo vệ, an toàn dữ liệu",
        },
        {
          id: "d",
          text: "Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra hoặc từ ngoài vào",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra hoặc từ ngoài vào",
    },
    {
      id: "it004-q84",
      prompt: "Thuộc tính Age có thể được tính từ DateOfBirth. Age thuộc loại thuộc tính nào?",
      options: [
        {
          id: "a",
          text: "Thuộc tính đa trị",
        },
        {
          id: "b",
          text: "Thuộc tính dẫn xuất",
        },
        {
          id: "c",
          text: "Thuộc tính phức hợp",
        },
        {
          id: "d",
          text: "Thuộc tính khóa ngoại",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Thuộc tính dẫn xuất",
    },
    {
      id: "it004-q85",
      prompt:
        "Trong Cú pháp câu lệnh ràng buộc Forein Key, từ khoá On Update có nghĩa gì? Hãy chọn phương án đung trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Là ràng buộc được phép cập nhật Check Key",
        },
        {
          id: "b",
          text: "Là ràng buộc được phép xóa khoá Forein Key",
        },
        {
          id: "c",
          text: "Là ràng buộc được phép cập nhật khoá Primary Key",
        },
        {
          id: "d",
          text: "Là ràng buộc được phép cập nhật khoá Forein Key",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Là ràng buộc được phép cập nhật khoá Forein Key",
    },
    {
      id: "it004-q86",
      prompt:
        "Trong Table, chức năng của Set Primary key là gì? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Kiểu dữ liệu",
        },
        {
          id: "b",
          text: "Tạo khóa",
        },
        {
          id: "c",
          text: "Chú thích",
        },
        {
          id: "d",
          text: "Sửa bảng",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Tạo khóa",
    },
    {
      id: "it004-q87",
      prompt: "Trong SQL Server, câu lệnh DROP TABLE có tác dụng gì?",
      options: [
        {
          id: "a",
          text: "Chỉ đổi tên bảng",
        },
        {
          id: "b",
          text: "Chỉ xóa các khóa ngoại",
        },
        {
          id: "c",
          text: "Xóa cấu trúc bảng và dữ liệu của bảng",
        },
        {
          id: "d",
          text: "Xóa các bản ghi nhưng giữ cấu trúc bảng",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Xóa cấu trúc bảng và dữ liệu của bảng",
    },
    {
      id: "it004-q88",
      prompt: "Mô hình trong là:",
      options: [
        {
          id: "a",
          text: "Mô hình biểu diễn cơ sở dữ liệu trìu tượng ở mức quan niệm",
        },
        {
          id: "b",
          text: "Có nhiều cách biểu diễn CSDL dưới dạng lưu trữ vật lý",
        },
        {
          id: "c",
          text: "Mô hình lưu trữ vật lý dữ liệu",
        },
        {
          id: "d",
          text: "Là một trong các mô hình biểu diễn CSDL dưới dạng lưu trữ vật lý",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Mô hình lưu trữ vật lý dữ liệu",
    },
    {
      id: "it004-q89",
      prompt: "Trong SQL Server, lệnh nào xóa một cột Age khỏi bảng Students?",
      options: [
        {
          id: "a",
          text: "DROP COLUMN Age FROM Students",
        },
        {
          id: "b",
          text: "ALTER Students DELETE Age",
        },
        {
          id: "c",
          text: "DELETE COLUMN Age FROM Students",
        },
        {
          id: "d",
          text: "ALTER TABLE Students DROP COLUMN Age",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — ALTER TABLE Students DROP COLUMN Age",
    },
    {
      id: "it004-q90",
      prompt:
        "Hãy chọn phương án ứng với tác dụng của câu lệnh ALTER TABLE trong các phương án sau:",
      options: [
        {
          id: "a",
          text: "Thêm, sửa, xóa các cột trong bảng hiện tại",
        },
        {
          id: "b",
          text: "Tất cả đáp án đều đúng",
        },
        {
          id: "c",
          text: "Xóa một bảng trong một cơ sở dữ liệu",
        },
        {
          id: "d",
          text: "Tạo ra một bảng trong một cơ sở dữ liệu",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Thêm, sửa, xóa các cột trong bảng hiện tại",
    },
    {
      id: "it004-q91",
      prompt: "Cho R(A, B, C, D) với F = {AB -> C, C -> D}. Tập thuộc tính nào là một khóa của R?",
      options: [
        {
          id: "a",
          text: "AB",
        },
        {
          id: "b",
          text: "A",
        },
        {
          id: "c",
          text: "B",
        },
        {
          id: "d",
          text: "CD",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — AB",
    },
    {
      id: "it004-q92",
      prompt: "Hãy chọn phương án đúng nhất về khái niệm của DBMS:",
      options: [
        {
          id: "a",
          text: "Tạo cấu trúc dữ liệu tương ứng với mô hình dữ liệu.",
        },
        {
          id: "b",
          text: "Hệ thống phần mềm điều khiển các chiến lược truy nhập và tổ chức lưu trữ CSDL",
        },
        {
          id: "c",
          text: "Đảm bảo an toàn, bảo mật dữ liệu và tính toàn vẹn dữ liệu.",
        },
        {
          id: "d",
          text: "Cập nhật, chèn thêm, loại bỏ hay sửa đổi dữ liệu mức tệp.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — Hệ thống phần mềm điều khiển các chiến lược truy nhập và tổ chức lưu trữ CSDL",
    },
    {
      id: "it004-q93",
      prompt: "Ràng buộc dữ liệu",
      options: [
        {
          id: "a",
          text: "Mối quan hệ giữa các thực thể dữ liệu",
        },
        {
          id: "b",
          text: "Các định nghĩa, tiên đề, định lý",
        },
        {
          id: "c",
          text: "Các quy tắc, quy định",
        },
        {
          id: "d",
          text: "Quy tắc biểu diễn cấu trúc dữ liệu",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Mối quan hệ giữa các thực thể dữ liệu",
    },
    {
      id: "it004-q94",
      prompt: "Mô hình cơ sở dữ liệu Client-Server:",
      options: [
        {
          id: "a",
          text: "Các máy khách chia sẻ gánh nặng xử lý của máy chủ trung tâm",
        },
        {
          id: "b",
          text: "Máy chủ và máy đều tham gia quá trình xử lý",
        },
        {
          id: "c",
          text: "Máy khách yêu cầu máy chủ cung cấp các loại dịch vụ",
        },
        {
          id: "d",
          text: "Máy khách thực hiện các ứng dụng, nó gửi yêu cầu về máy chủ được kết nối với cơ sở dữ liệu, máy chủ xử lý và gửi trả lại kết quả về máy khách",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Máy khách thực hiện các ứng dụng, nó gửi yêu cầu về máy chủ được kết nối với cơ sở dữ liệu, máy chủ xử lý và gửi trả lại kết quả về máy khách",
    },
    {
      id: "it004-q95",
      prompt:
        "Hãy chọn phương án ứng với câu lệnh thêm một cột vào bảng trong SQL Server trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Insert table <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
        {
          id: "b",
          text: "Add <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
        {
          id: "c",
          text: "Add table <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
        {
          id: "d",
          text: "Alter table <Tên bảng cần sửa> Add <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Alter table <Tên bảng cần sửa> Add <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
    },
    {
      id: "it004-q96",
      prompt: "Cách nhìn cơ sở dữ liệu của người sử dụng bằng:",
      options: [
        {
          id: "a",
          text: "Mô hình ngoài và mô hình dữ liệu",
        },
        {
          id: "b",
          text: "Mô hình dữ liệu",
        },
        {
          id: "c",
          text: "Mô hình ngoài",
        },
        {
          id: "d",
          text: "Mô hình trong",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Mô hình ngoài",
    },
    {
      id: "it004-q97",
      prompt:
        "Một thuộc tính có thể được tách thành nhiều thuộc tính nhỏ hơn, ví dụ FullName có thể tách thành FirstName và LastName. Đây là loại thuộc tính nào?",
      options: [
        {
          id: "a",
          text: "Thuộc tính đơn",
        },
        {
          id: "b",
          text: "Thuộc tính dẫn xuất",
        },
        {
          id: "c",
          text: "Thuộc tính khóa",
        },
        {
          id: "d",
          text: "Thuộc tính phức hợp",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Thuộc tính phức hợp",
    },
    {
      id: "it004-q98",
      prompt: "Người sử dụng có thể truy nhập:",
      options: [
        {
          id: "a",
          text: "Toàn bộ cơ sở dữ liệu",
        },
        {
          id: "b",
          text: "Phụ thuộc vào quyền truy nhập",
        },
        {
          id: "c",
          text: "Hạn chế",
        },
        {
          id: "d",
          text: "Một phần cơ sở dữ liệu",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Phụ thuộc vào quyền truy nhập",
    },
    {
      id: "it004-q99",
      prompt: "Mô hình ngoài là:",
      options: [
        {
          id: "a",
          text: "Nội dung thông tin của toàn bộ CSDL dưới cách nhìn của người sử dụng",
        },
        {
          id: "b",
          text: "Nội dung thông tin của toàn bộ CSDL",
        },
        {
          id: "c",
          text: "Nội dung thông tin của một phần cơ sở dữ liệu",
        },
        {
          id: "d",
          text: "Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng",
    },
    {
      id: "it004-q100",
      prompt:
        "Một truy vấn JOIN trả về nhiều dòng cho cùng một CustomerID. Trước khi thêm DISTINCT, cần kiểm tra điều gì?",
      options: [
        {
          id: "a",
          text: "Có cần DROP bảng hay không",
        },
        {
          id: "b",
          text: "Có cần đổi Primary Key hay không",
        },
        {
          id: "c",
          text: "Kiểu dữ liệu của CustomerID",
        },
        {
          id: "d",
          text: "Cardinality của mối quan hệ và điều kiện JOIN",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Cardinality của mối quan hệ và điều kiện JOIN",
    },
    {
      id: "it004-q101",
      prompt:
        "Hãy cho biết Cơ sở dữ liệu MSDB dùng để làm gì? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Lưu trữ tất cả thông tin hệ thống của Sql Server",
        },
        {
          id: "b",
          text: "CSDL mẫu để tạo ra các CSDL người dùng",
        },
        {
          id: "c",
          text: "Là CSDL được sử dụng bởi Sql Server Agent: để lập lịch hoặc một số công việc thường nhật",
        },
        {
          id: "d",
          text: "Lưu trữ các đối tượng tạm thời",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — Là CSDL được sử dụng bởi Sql Server Agent: để lập lịch hoặc một số công việc thường nhật",
    },
    {
      id: "it004-q102",
      prompt: "Cho biết phương án nào sau đây là cú pháp câu lệnh ràng buộc Check?",
      options: [
        {
          id: "a",
          text: "CONSTRAINT điều kiện CHECK (ràng buộc)",
        },
        {
          id: "b",
          text: "CHECK (điều kiện)",
        },
        {
          id: "c",
          text: "CONSTRAINT CHECK (điều kiện)",
        },
        {
          id: "d",
          text: "CONSTRAINT tên ràng buộc CHECK (điều kiện)",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — CONSTRAINT tên ràng buộc CHECK (điều kiện)",
    },
    {
      id: "it004-q103",
      prompt: "Trong SQL Server, câu lệnh nào dùng để tạo một bảng mới?",
      options: [
        {
          id: "a",
          text: "CREATE TABLE Students (StudentID int, StudentName varchar(50))",
        },
        {
          id: "b",
          text: "MAKE TABLE Students (StudentID int, StudentName varchar(50))",
        },
        {
          id: "c",
          text: "NEW TABLE Students (StudentID int, StudentName varchar(50))",
        },
        {
          id: "d",
          text: "ADD TABLE Students (StudentID int, StudentName varchar(50))",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — CREATE TABLE Students (StudentID int, StudentName varchar(50))",
    },
    {
      id: "it004-q104",
      prompt:
        "Cho hai quan hệ R(A, B) và S(B, C). Phép toán đại số quan hệ nào dùng để kết hợp các tuple có giá trị B tương ứng?",
      options: [
        {
          id: "a",
          text: "Projection",
        },
        {
          id: "b",
          text: "Union",
        },
        {
          id: "c",
          text: "Join",
        },
        {
          id: "d",
          text: "Selection",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Join",
    },
    {
      id: "it004-q105",
      prompt:
        "Hãy cho biết trong các phần mềm sau đây, phần mềm nào không phải là hệ quản trị CSDL quan hệ? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Microsoft Access",
        },
        {
          id: "b",
          text: "Microsoft SQL server",
        },
        {
          id: "c",
          text: "Microsoft Excel",
        },
        {
          id: "d",
          text: "Oracle",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Microsoft Excel",
    },
    {
      id: "it004-q106",
      prompt: "Thứ tự đúng các mức trong mô hình kiến trúc cơ sở dữ liệu:",
      options: [
        {
          id: "a",
          text: "Mức ngoài, mức quan niệm và mức trong",
        },
        {
          id: "b",
          text: "Mức ngoài, mức quan niệm và mức mô hình",
        },
        {
          id: "c",
          text: "Mức quan niệm, mức trong và mức ngoài",
        },
        {
          id: "d",
          text: "Mức trong, mức mô hình dữ liệu và mức ngoài",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Mức ngoài, mức quan niệm và mức trong",
    },
    {
      id: "it004-q107",
      prompt: "Ánh xạ quan niệm-ngoài:",
      options: [
        {
          id: "a",
          text: "Quan hệ môt-một giữa mô hình ngoài và mô hình dữ liệu",
        },
        {
          id: "b",
          text: "Quan hệ giữa mô hình ngoài và mô hình ngoài",
        },
        {
          id: "c",
          text: "Quan hệ giữa mô hình trong và mô hình trong",
        },
        {
          id: "d",
          text: "Quan hệ giữa mô hình ngoài và mô hình trong)",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Quan hệ môt-một giữa mô hình ngoài và mô hình dữ liệu",
    },
    {
      id: "it004-q108",
      prompt: "Trong mô hình dữ liệu quan hệ, dữ liệu được tổ chức chủ yếu dưới dạng nào?",
      options: [
        {
          id: "a",
          text: "Các cây phân cấp",
        },
        {
          id: "b",
          text: "Các đồ thị",
        },
        {
          id: "c",
          text: "Các tệp văn bản độc lập",
        },
        {
          id: "d",
          text: "Các bảng gồm hàng và cột",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Các bảng gồm hàng và cột",
    },
    {
      id: "it004-q109",
      prompt: "Trong SQL Server, câu lệnh ALTER TABLE thường được sử dụng để làm gì?",
      options: [
        {
          id: "a",
          text: "Tính tổng dữ liệu trong bảng",
        },
        {
          id: "b",
          text: "Thêm, xóa hoặc thay đổi cấu trúc của bảng",
        },
        {
          id: "c",
          text: "Truy vấn dữ liệu",
        },
        {
          id: "d",
          text: "Thêm bản ghi vào bảng",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Thêm, xóa hoặc thay đổi cấu trúc của bảng",
    },
    {
      id: "it004-q110",
      prompt: "Trong SQL Server, lệnh nào đổi tên cột CourseName thành Title?",
      options: [
        {
          id: "a",
          text: "ALTER TABLE Courses ALTER COLUMN CourseName = 'Title'",
        },
        {
          id: "b",
          text: "UPDATE Courses SET CourseName = 'Title'",
        },
        {
          id: "c",
          text: "EXEC sp_rename 'Courses.CourseName', 'Title', 'COLUMN'",
        },
        {
          id: "d",
          text: "ALTER TABLE Courses RENAME COLUMN CourseName TO Title",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — EXEC sp_rename 'Courses.CourseName', 'Title', 'COLUMN'",
    },
    {
      id: "it004-q111",
      prompt:
        "Khi kết quả truy vấn bị lặp nhiều dòng do JOIN với một bảng có nhiều bản ghi liên quan, bước phân tích đầu tiên nên là gì?",
      options: [
        {
          id: "a",
          text: "Xóa các bản ghi bị lặp trong cơ sở dữ liệu",
        },
        {
          id: "b",
          text: "Xác định cardinality của mối quan hệ và nguyên nhân tạo ra nhiều dòng",
        },
        {
          id: "c",
          text: "Luôn thêm DISTINCT mà không cần phân tích",
        },
        {
          id: "d",
          text: "Thay INNER JOIN bằng CROSS JOIN",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — Xác định cardinality của mối quan hệ và nguyên nhân tạo ra nhiều dòng",
    },
    {
      id: "it004-q112",
      prompt:
        "Hãy cho biết các thành phần cơ bản của một CSDL trong SQL là? Đâu là phương án đúng trong các phương án dưới đây:",
      options: [
        {
          id: "a",
          text: "Tables, Query, Synonyms, Programmablity, Security",
        },
        {
          id: "b",
          text: "Tables, View, Synonyms, Programmablity, Form",
        },
        {
          id: "c",
          text: "Tables, View, Synonyms, Programmablity, Report",
        },
        {
          id: "d",
          text: "Tables, View, Synonyms, Programmablity, Security",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Tables, View, Synonyms, Programmablity, Security",
    },
    {
      id: "it004-q113",
      prompt: "Ấn bản SQL SQL Server Developer Edition là ấn bản:",
      options: [
        {
          id: "a",
          text: "Được sử dụng trong doanh nghiệp, tổ chức có mức yêu cầu xử lý giao diện trực tuyến",
        },
        {
          id: "b",
          text: "Phục vụ cho quản trị và phân tích dữ liệu",
        },
        {
          id: "c",
          text: "Phát triển và kiểm tra ứng dụng",
        },
        {
          id: "d",
          text: "Miễn phí",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Phát triển và kiểm tra ứng dụng",
    },
    {
      id: "it004-q114",
      prompt: "Hàm COUNT(*) trong SQL Server trả về gì?",
      options: [
        {
          id: "a",
          text: "Số lượng bản ghi trong một nhóm hoặc bảng",
        },
        {
          id: "b",
          text: "Tổng giá trị của một cột",
        },
        {
          id: "c",
          text: "Số lượng bản ghi trùng nhau",
        },
        {
          id: "d",
          text: "Trả về lỗi",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Số lượng bản ghi trong một nhóm hoặc bảng",
    },
    {
      id: "it004-q115",
      prompt:
        "Hãy cho biết trong các phương án dưới đây, đâu là phương án đúng ứng với thao tác tạo CSDL trong SQL Server",
      options: [
        {
          id: "a",
          text: "Right Click Database/ Attach…",
        },
        {
          id: "b",
          text: "Left Click Database/ New Database",
        },
        {
          id: "c",
          text: "Right Click Database/ New Database",
        },
        {
          id: "d",
          text: "Right Click Database/ Restore Database",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Right Click Database/ New Database",
    },
    {
      id: "it004-q116",
      prompt: "Cho biết phương án nào sau đây là cú pháp câu lệnh thêm một cột vào bảng trong SQL?",
      options: [
        {
          id: "a",
          text: "add table <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
        {
          id: "b",
          text: "alter table <Tên bảng cần sửa> Add <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
        {
          id: "c",
          text: "add <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
        {
          id: "d",
          text: "insert table <Tên bảng cần sửa> <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — alter table <Tên bảng cần sửa> Add <tên cột mới> <kiểu dữ liệu> [ràng buộc]",
    },
    {
      id: "it004-q117",
      prompt:
        "Trong SQL Server, câu lệnh nào sau đây được dùng để thêm một bản ghi mới vào bảng Customers?",
      options: [
        {
          id: "a",
          text: "CREATE Customers VALUES (1, 'An')",
        },
        {
          id: "b",
          text: "UPDATE Customers VALUES (1, 'An')",
        },
        {
          id: "c",
          text: "ADD INTO Customers VALUES (1, 'An')",
        },
        {
          id: "d",
          text: "INSERT INTO Customers VALUES (1, 'An')",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — INSERT INTO Customers VALUES (1, 'An')",
    },
    {
      id: "it004-q118",
      prompt: "Cơ sở dữ liệu là:",
      options: [
        {
          id: "a",
          text: "Một bộ sưu tập rất lớn về các loại dữ liệu tác nghiệp, lưu trữ theo quy tắc)",
        },
        {
          id: "b",
          text: "Kho dữ liệu tác nghiệp",
        },
        {
          id: "c",
          text: "Tập các File dữ liệu tác nghiệp)",
        },
        {
          id: "d",
          text: "Một bộ sưu tập rất lớn về các loại dữ liệu tác nghiệp",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Một bộ sưu tập rất lớn về các loại dữ liệu tác nghiệp, lưu trữ theo quy tắc)",
    },
    {
      id: "it004-q119",
      prompt:
        "Xét quan hệ giữa Customer và Order: một Customer có thể có nhiều Order, nhưng một Order chỉ thuộc về một Customer. Phát biểu nào đúng?",
      options: [
        {
          id: "a",
          text: "Customer và Order không có quan hệ",
        },
        {
          id: "b",
          text: "Customer và Order có quan hệ 1:1",
        },
        {
          id: "c",
          text: "Customer và Order có quan hệ N:N",
        },
        {
          id: "d",
          text: "Customer và Order có quan hệ 1:N",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Customer và Order có quan hệ 1:N",
    },
    {
      id: "it004-q120",
      prompt:
        "Trong SQL ta có 3 thành phần: Column Name, Data Type, Allow Nulls để tạo cấu trúc bảng. Cho biết phương án nào dưới đây là tác dụng của Allow Nulls?",
      options: [
        {
          id: "a",
          text: "Không bắt buộc người dùng nhập dữ liệu.",
        },
        {
          id: "b",
          text: "Ràng buộc người dùng bắt buộc nhập dữ liệu cho cột tương ứng hoặc không.",
        },
        {
          id: "c",
          text: "Người dùng không được để trống tất cả các cột trong bảng.",
        },
        {
          id: "d",
          text: "Bắt buộc người dùng nhập dữ liệu.",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — Ràng buộc người dùng bắt buộc nhập dữ liệu cho cột tương ứng hoặc không.",
    },
    {
      id: "it004-q121",
      prompt: "Vai trò của cơ sở dữ liệu trong tổ chức là gì?",
      options: [
        {
          id: "a",
          text: "Kết nối internet",
        },
        {
          id: "b",
          text: "Chỉ lưu trữ file",
        },
        {
          id: "c",
          text: "Hỗ trợ ra quyết định dựa trên dữ liệu",
        },
        {
          id: "d",
          text: "Thiết kế phần cứng",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Hỗ trợ ra quyết định dựa trên dữ liệu",
    },
    {
      id: "it004-q122",
      prompt: "Cho R(A, B, C, D) với F = {AB -> C, C -> D}. Bao đóng AB+ là gì?",
      options: [
        {
          id: "a",
          text: "{A, C, D}",
        },
        {
          id: "b",
          text: "{A, B}",
        },
        {
          id: "c",
          text: "{A, B, C, D}",
        },
        {
          id: "d",
          text: "{A, B, C}",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — {A, B, C, D}",
    },
    {
      id: "it004-q123",
      prompt:
        "Trong các phương án dưới đây, hãy lựa chọn phương án ứng với ấn bản của SQL Server 2014:",
      options: [
        {
          id: "a",
          text: "SQL Server Enterprise Edition, SQL Server Standard Edition",
        },
        {
          id: "b",
          text: "Tất cả đều sai",
        },
        {
          id: "c",
          text: "SQL Server Enterprise Edition, SQL Server Standard Edition, SQL Server Business Intelligence Edition",
        },
        {
          id: "d",
          text: "SQL Server Enterprise Edition, SQL Server Standard Edition, SQL server Developer Edition",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — SQL Server Enterprise Edition, SQL Server Standard Edition, SQL Server Business Intelligence Edition",
    },
    {
      id: "it004-q124",
      prompt:
        "Cho R(A, B, C) với F = {A -> B, A -> C}. Phụ thuộc hàm nào sau đây tương đương với hai phụ thuộc trên theo luật hợp?",
      options: [
        {
          id: "a",
          text: "AB -> C",
        },
        {
          id: "b",
          text: "AC -> B",
        },
        {
          id: "c",
          text: "BC -> A",
        },
        {
          id: "d",
          text: "A -> BC",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — A -> BC",
    },
    {
      id: "it004-q125",
      prompt:
        "Cho R(A, B, C, D) với F = {A -> B, B -> C, A -> D}. Phụ thuộc hàm A -> C được suy ra bằng cách áp dụng luật nào?",
      options: [
        {
          id: "a",
          text: "Luật tăng trưởng",
        },
        {
          id: "b",
          text: "Luật bắc cầu",
        },
        {
          id: "c",
          text: "Luật phản xạ",
        },
        {
          id: "d",
          text: "Luật phân rã",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Luật bắc cầu",
    },
    {
      id: "it004-q126",
      prompt:
        "Hãy chọn phương án đúng ứng với ý nghĩa của câu lệnh dưới đây: DELETE FROM sinhvien WHERE gt is null",
      options: [
        {
          id: "a",
          text: "Sử dụng để sửa một dòng hoặc nhiều dòng từ một bảng dựa trên những điều kiện gt để trống",
        },
        {
          id: "b",
          text: "Sử dụng để xóa một dòng hoặc nhiều dòng từ một bảng dựa trên những điều kiện gt bằng 0",
        },
        {
          id: "c",
          text: "Sử dụng để xóa một dòng hoặc nhiều dòng từ một bảng dựa trên điều kiện gt để trống",
        },
        {
          id: "d",
          text: "Sử dụng để thêm một dòng hoặc nhiều dòng từ một bảng dựa trên những điều kiện gt để trống",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — Sử dụng để xóa một dòng hoặc nhiều dòng từ một bảng dựa trên điều kiện gt để trống",
    },
    {
      id: "it004-q127",
      prompt:
        "Hãy chọn phương án ứng với cú pháp được sử dụng để xóa bảng trong các phương án sau:",
      options: [
        {
          id: "a",
          text: "DELETE TABLE",
        },
        {
          id: "b",
          text: "DROP TABLE",
        },
        {
          id: "c",
          text: "ALTER TABLE",
        },
        {
          id: "d",
          text: "DROP COLUMN",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — DROP TABLE",
    },
    {
      id: "it004-q128",
      prompt:
        "Một Person có duy nhất một Passport và một Passport chỉ thuộc về một Person. Mối quan hệ phù hợp là gì?",
      options: [
        {
          id: "a",
          text: "1:N",
        },
        {
          id: "b",
          text: "1:1",
        },
        {
          id: "c",
          text: "N:N",
        },
        {
          id: "d",
          text: "N:1",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — 1:1",
    },
    {
      id: "it004-q129",
      prompt:
        "Trong SQL Server, câu lệnh DELETE FROM Orders không có mệnh đề WHERE sẽ thực hiện thao tác nào?",
      options: [
        {
          id: "a",
          text: "Xóa một bản ghi đầu tiên",
        },
        {
          id: "b",
          text: "Xóa tất cả các bản ghi trong bảng Orders",
        },
        {
          id: "c",
          text: "Xóa cấu trúc bảng Orders",
        },
        {
          id: "d",
          text: "Không thực hiện thao tác nào",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — Xóa tất cả các bản ghi trong bảng Orders",
    },
    {
      id: "it004-q130",
      prompt:
        "Cho R(A, B, C, D) với F = {A -> B, B -> C, C -> D}. Phụ thuộc hàm nào sau đây là phụ thuộc bắc cầu?",
      options: [
        {
          id: "a",
          text: "B -> C",
        },
        {
          id: "b",
          text: "A -> C",
        },
        {
          id: "c",
          text: "AB -> A",
        },
        {
          id: "d",
          text: "A -> B",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — A -> C",
    },
    {
      id: "it004-q131",
      prompt: "Mục tiêu của cơ sở dữ liệu là:",
      options: [
        {
          id: "a",
          text: "Không làm thay đổi cấu trúc lưu trữ dữ liệu",
        },
        {
          id: "b",
          text: "Không làm thay đổi chiến lược truy nhập cơ sở dữ liệu",
        },
        {
          id: "c",
          text: "Dữ liệu chỉ được biểu diễn, mô tả một cách duy nhất",
        },
        {
          id: "d",
          text: "Bảo đảm tính độc lập dữ liệu",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Bảo đảm tính độc lập dữ liệu",
    },
    {
      id: "it004-q132",
      prompt: "Cách nào sau đây có thể dùng để viết truy vấn con trong SQL Server?",
      options: [
        {
          id: "a",
          text: "Tất cả đều đúng",
        },
        {
          id: "b",
          text: "Subquery trong mệnh đề GROUP BY với IN hoặc NOT IN",
        },
        {
          id: "c",
          text: "Subquery trong mệnh đề WHERE với EXITS hoặc NOT EXITS",
        },
        {
          id: "d",
          text: "Subquery trong mệnh đề FROM để tạo bảng tạm",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — Subquery trong mệnh đề FROM để tạo bảng tạm",
    },
    {
      id: "it004-q133",
      prompt:
        "Một Student có thể đăng ký nhiều Course và một Course có thể có nhiều Student. Cardinality của mối quan hệ này là gì?",
      options: [
        {
          id: "a",
          text: "N:1",
        },
        {
          id: "b",
          text: "N:N",
        },
        {
          id: "c",
          text: "1:N",
        },
        {
          id: "d",
          text: "1:1",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — N:N",
    },
    {
      id: "it004-q134",
      prompt: "Đặc trưng của một mô hình dữ liệu:",
      options: [
        {
          id: "a",
          text: "Tính ổn định, tính đơn giản, cần phải kiểm tra dư thừa , đối xứng và có cơ sở lý thuyết vững chắc)",
        },
        {
          id: "b",
          text: "Mô hình dữ liệu đơn giản",
        },
        {
          id: "c",
          text: "Người sử dụng có quyền truy nhập tại mọi lúc, mọi nơi",
        },
        {
          id: "d",
          text: "Biểu diễn dữ liệu đơn giản và không cấu trúc",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Tính ổn định, tính đơn giản, cần phải kiểm tra dư thừa , đối xứng và có cơ sở lý thuyết vững chắc)",
    },
    {
      id: "it004-q135",
      prompt:
        "Trong SQL ta có 3 thành phần: Column Name, Data Type, Allow Nulls để tạo cấu trúc bảng. Cho biết phương án nào dưới đây là tác dụng của Data Type?",
      options: [
        {
          id: "a",
          text: "Chọn kiểu cột tương ứng.",
        },
        {
          id: "b",
          text: "Tạo mới kiểu cột tương ứng.",
        },
        {
          id: "c",
          text: "Chọn kiểu dữ liệu cho cột tương ứng.",
        },
        {
          id: "d",
          text: "Tạo mới kiểu dữ liệu cho cột tương ứng.",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Chọn kiểu dữ liệu cho cột tương ứng.",
    },
    {
      id: "it004-q136",
      prompt:
        "Cho bảng Employees(EmployeeID, EmployeeName, Salary). Lệnh nào tăng lương 10% cho tất cả nhân viên?",
      options: [
        {
          id: "a",
          text: "INSERT INTO Employees SET Salary = Salary * 1.10",
        },
        {
          id: "b",
          text: "ALTER TABLE Employees SET Salary = Salary * 1.10",
        },
        {
          id: "c",
          text: "UPDATE Employees SET Salary = 10%",
        },
        {
          id: "d",
          text: "UPDATE Employees SET Salary = Salary * 1.10",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — UPDATE Employees SET Salary = Salary * 1.10",
    },
    {
      id: "it004-q137",
      prompt: "Cho R(A, B, C, D, E) với F = {A -> B, B -> C, CD -> E}. Bao đóng AD+ là gì?",
      options: [
        {
          id: "a",
          text: "{A, D}",
        },
        {
          id: "b",
          text: "{A, B, C, D, E}",
        },
        {
          id: "c",
          text: "{A, B, C, D}",
        },
        {
          id: "d",
          text: "{A, B, D}",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — {A, B, C, D}",
    },
    {
      id: "it004-q138",
      prompt:
        "Cho bảng Products(ProductID, ProductName). Lệnh nào thêm cột Price với kiểu decimal(10,2)?",
      options: [
        {
          id: "a",
          text: "UPDATE Products ADD Price decimal(10,2)",
        },
        {
          id: "b",
          text: "CREATE COLUMN Price decimal(10,2) IN Products",
        },
        {
          id: "c",
          text: "ALTER TABLE Products ADD Price decimal(10,2)",
        },
        {
          id: "d",
          text: "ALTER COLUMN Products ADD Price decimal(10,2)",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — ALTER TABLE Products ADD Price decimal(10,2)",
    },
    {
      id: "it004-q139",
      prompt: "Hãy chọn phương án ứng với câu lệnh được sử dụng để tạo Database trong SQL:",
      options: [
        {
          id: "a",
          text: "Update database tên_database",
        },
        {
          id: "b",
          text: "Create data tên_database",
        },
        {
          id: "c",
          text: "Create database tên_database",
        },
        {
          id: "d",
          text: "Create table tên_database",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Create database tên_database",
    },
    {
      id: "it004-q140",
      prompt:
        "Cho bảng Products(ProductID, ProductName, Price). Lệnh nào cập nhật giá tăng 20% chỉ cho các sản phẩm có giá hiện tại nhỏ hơn 100?",
      options: [
        {
          id: "a",
          text: "INSERT INTO Products SET Price = Price * 1.2 WHERE Price < 100",
        },
        {
          id: "b",
          text: "UPDATE Products SET Price = 20 WHERE Price < 100",
        },
        {
          id: "c",
          text: "UPDATE Products SET Price = Price * 1.2 WHERE Price < 100",
        },
        {
          id: "d",
          text: "ALTER TABLE Products SET Price = Price * 1.2 WHERE Price < 100",
        },
      ],
      correctOptionId: "c",
      explanation:
        "Theo bộ ôn tập: đáp án C — UPDATE Products SET Price = Price * 1.2 WHERE Price < 100",
    },
    {
      id: "it004-q141",
      prompt:
        "Xét lược đồ CSDL trường học với bảng Courses (CourseID, CourseName). Lệnh nào đổi tên cột CourseName thành Title?",
      options: [
        {
          id: "a",
          text: "UPDATE Courses SET CourseName = 'Title'",
        },
        {
          id: "b",
          text: "EXEC sp_RENAME ' CourseName ', 'Title', 'COLUMN'",
        },
        {
          id: "c",
          text: "ALTER TABLE Courses ALTER COLUMN CourseName = 'Title'",
        },
        {
          id: "d",
          text: "ALTER TABLE Courses RENAME COLUMN CourseName TO Title",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — EXEC sp_RENAME ' CourseName ', 'Title', 'COLUMN'",
    },
    {
      id: "it004-q142",
      prompt: "Hãy chọn phương án ứng với số ấn bản của SQL Server 2014:",
      options: [
        {
          id: "a",
          text: "4",
        },
        {
          id: "b",
          text: "6",
        },
        {
          id: "c",
          text: "5",
        },
        {
          id: "d",
          text: "3",
        },
      ],
      correctOptionId: "d",
      explanation: "Theo bộ ôn tập: đáp án D — 3",
    },
    {
      id: "it004-q143",
      prompt: "Cho biết phương án nào sau đây là cú pháp câu lệnh cập nhật (hoặc sửa) dữ liệu?",
      options: [
        {
          id: "a",
          text: "UPDATE <tên bảng> <các thuộc tính cần cập nhật> SET (<các giá trị cập nhật>) FROM <tên các bảng>WHERE <biểu thức điều kiện>",
        },
        {
          id: "b",
          text: "UPDATE <tên bảng> <thuộc tính cần cập nhật> = <giá trị cập nhật> FROM <tên các bảng> WHERE <biểu thức điều kiện>",
        },
        {
          id: "c",
          text: "UPDATE <tên bảng> SET <thuộc tính cần cập nhật> = <giá trị cập nhật> FROM <tên các bảng> WHERE <biểu thức điều kiện>",
        },
        {
          id: "d",
          text: "UPDATE INTO <tên bảng> SET <thuộc tính cần cập nhật> = <giá trị cập nhật> FROM <tên các bảng> WHERE <biểu thức điều kiện>",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — UPDATE <tên bảng> <thuộc tính cần cập nhật> = <giá trị cập nhật> FROM <tên các bảng> WHERE <biểu thức điều kiện>",
    },
    {
      id: "it004-q144",
      prompt:
        "Cho R(A, B, C, D) với F = {A -> B, B -> C}. Phụ thuộc hàm nào sau đây được suy ra từ F theo luật bắc cầu?",
      options: [
        {
          id: "a",
          text: "A -> C",
        },
        {
          id: "b",
          text: "AB -> A",
        },
        {
          id: "c",
          text: "B -> A",
        },
        {
          id: "d",
          text: "C -> A",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — A -> C",
    },
    {
      id: "it004-q145",
      prompt: "Mô hình quan niệm là:",
      options: [
        {
          id: "a",
          text: "Nội dung thông tin của một phần dữ liệu",
        },
        {
          id: "b",
          text: "Cách nhìn dữ liệu ở mức ngoài",
        },
        {
          id: "c",
          text: "Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng",
        },
        {
          id: "d",
          text: "Cách nhìn dữ liệu một cách tổng quát của người sử dụng",
        },
      ],
      correctOptionId: "d",
      explanation:
        "Theo bộ ôn tập: đáp án D — Cách nhìn dữ liệu một cách tổng quát của người sử dụng",
    },
    {
      id: "it004-q146",
      prompt: "Không nhất quán dữ liệu trong lưu trữ:",
      options: [
        {
          id: "a",
          text: "Làm cho dữ liệu mất đi tính toàn vẹn cuả nó",
        },
        {
          id: "b",
          text: "Không thể sửa đổi, bổ sung, cập nhật dữ liệu",
        },
        {
          id: "c",
          text: "Có thể triển khai tra cứu tìm kiếm",
        },
        {
          id: "d",
          text: "Không xuất hiện mâu thuẫn thông tin",
        },
      ],
      correctOptionId: "a",
      explanation: "Theo bộ ôn tập: đáp án A — Làm cho dữ liệu mất đi tính toàn vẹn cuả nó",
    },
    {
      id: "it004-q147",
      prompt:
        "Cho bảng Employees(EmployeeID, EmployeeName, Salary). Lệnh nào thay đổi kiểu dữ liệu của Salary thành decimal(12,2)?",
      options: [
        {
          id: "a",
          text: "CHANGE TABLE Employees Salary decimal(12,2)",
        },
        {
          id: "b",
          text: "ALTER TABLE Employees ALTER COLUMN Salary decimal(12,2)",
        },
        {
          id: "c",
          text: "ALTER Employees MODIFY Salary decimal(12,2)",
        },
        {
          id: "d",
          text: "UPDATE Employees ALTER Salary decimal(12,2)",
        },
      ],
      correctOptionId: "b",
      explanation:
        "Theo bộ ôn tập: đáp án B — ALTER TABLE Employees ALTER COLUMN Salary decimal(12,2)",
    },
    {
      id: "it004-q148",
      prompt: "Tính toàn vẹn dữ liệu đảm bảo",
      options: [
        {
          id: "a",
          text: "Giảm dư thừa, nhất quán và toàn vẹn của dữ liệu",
        },
        {
          id: "b",
          text: "Cho việc cập nhật, sửa đổi, bổ sung dữ liệu)thuận lợi",
        },
        {
          id: "c",
          text: "Cho sự lưu trữ dữ liệu luôn luôn đúng",
        },
        {
          id: "d",
          text: "Phản ánh đúng hiện thực khách quan dữ liệu",
        },
      ],
      correctOptionId: "c",
      explanation: "Theo bộ ôn tập: đáp án C — Cho sự lưu trữ dữ liệu luôn luôn đúng",
    },
    {
      id: "it004-q149",
      prompt: "Cho R(A,B,C,D) với F={AB→C, C→D, D→A}. Tập khóa nào sau đây là đầy đủ?",
      options: [
        {
          id: "a",
          text: "AB và AD",
        },
        {
          id: "b",
          text: "AB, AC và BD",
        },
        {
          id: "c",
          text: "A, AB và AC",
        },
        {
          id: "d",
          text: "AB và AC",
        },
      ],
      correctOptionId: "b",
      explanation: "Theo bộ ôn tập: đáp án B — AB, AC và BD",
    },
    {
      id: "it004-q150",
      prompt: "Chọn câu trả lời chính xác:",
      options: [
        {
          id: "a",
          text: "Hệ quản trị CSDL hoạt động độc lập, không phụ thuộc vào hệ điều hành",
        },
        {
          id: "b",
          text: "Người lập trình ứng dụng không được phép đồng thời là người quản trị hệ thống vì như vậy vi phạm quy tắc an toàn và bảo mật",
        },
        {
          id: "c",
          text: "Hệ quản trị CSDL là một bộ phận của ngôn ngữ CSDL, đóng vai trò chương trình dịch cho ngôn ngữ CSDL",
        },
        {
          id: "d",
          text: "Người quản trị CSDL phải hiểu biết sâu sắc và có kĩ năng tốt trong các lĩnh vực CSDL, hệ quản trị CSDL và môi trường hệ thống",
        },
      ],
      correctOptionId: "a",
      explanation:
        "Theo bộ ôn tập: đáp án A — Hệ quản trị CSDL hoạt động độc lập, không phụ thuộc vào hệ điều hành",
    },
  ],
};
