
// Declare globals for the libraries loaded via script tags
declare const mammoth: any;

// Hardcoded mapping for simplified level lookup
const LEVEL_MAPPING: Record<string, { ten: string, kyHieu: string, nhiemVu: string }> = {
  "Lớp 1": { ten: "Cơ bản 1", kyHieu: "CB1", nhiemVu: "Nhiệm vụ đơn giản, có hướng dẫn" },
  "Lớp 2": { ten: "Cơ bản 1", kyHieu: "CB1", nhiemVu: "Nhiệm vụ đơn giản, có hướng dẫn" },
  "Lớp 3": { ten: "Cơ bản 2", kyHieu: "CB2", nhiemVu: "Nhiệm vụ đơn giản, tự chủ hơn" },
  "Lớp 4": { ten: "Cơ bản 2", kyHieu: "CB2", nhiemVu: "Nhiệm vụ đơn giản, tự chủ hơn" },
  "Lớp 5": { ten: "Cơ bản 2", kyHieu: "CB2", nhiemVu: "Nhiệm vụ đơn giản, tự chủ hơn" },
  "Lớp 6": { ten: "Trung cấp 1", kyHieu: "TC1", nhiemVu: "Nhiệm vụ xác định rõ ràng, thường xuyên" },
  "Lớp 7": { ten: "Trung cấp 1", kyHieu: "TC1", nhiemVu: "Nhiệm vụ xác định rõ ràng, thường xuyên" },
  "Lớp 8": { ten: "Trung cấp 2", kyHieu: "TC2", nhiemVu: "Nhiệm vụ không thường xuyên, theo nhu cầu cá nhân" },
  "Lớp 9": { ten: "Trung cấp 2", kyHieu: "TC2", nhiemVu: "Nhiệm vụ không thường xuyên, theo nhu cầu cá nhân" },
  "Lớp 10": { ten: "Nâng cao 1", kyHieu: "NC1", nhiemVu: "Nhiệm vụ phức tạp, hướng dẫn người khác" },
  "Lớp 11": { ten: "Nâng cao 1", kyHieu: "NC1", nhiemVu: "Nhiệm vụ phức tạp, hướng dẫn người khác" },
  "Lớp 12": { ten: "Nâng cao 1", kyHieu: "NC1", nhiemVu: "Nhiệm vụ phức tạp, hướng dẫn người khác" },
};

// CHI TIẾT KHUNG NĂNG LỰC SỐ CẤP ĐỘ NC1 (LỚP 10, 11, 12) TỪ TÀI LIỆU
const KHUNG_NLS_NC1_DETAIL = `
MIỀN I: KHAI THÁC DỮ LIỆU VÀ THÔNG TIN (NC1)
- 1.1.NC1a: Đáp ứng nhu cầu thông tin. Gợi ý: Trò chơi "Truy tìm kho báu", so sánh dân số.
- 1.1.NC1b: Áp dụng kỹ thuật tìm kiếm nâng cao (thời gian, ngôn ngữ, quốc gia).
- 1.1.NC1c: Chỉ người khác cách truy cập và điều hướng dữ liệu.
- 1.1.NC1d: Tự đề xuất chiến lược tìm kiếm.
- 1.2.NC1a: Đánh giá độ tin cậy nguồn tin. Gợi ý: So sánh cùng sự kiện từ nhiều nguồn, phân tích tên miền (.gov, .edu).
- 1.2.NC1b: Đánh giá dữ liệu số khác nhau. Gợi ý: Khảo sát, phân tích bảng tính, tạo biểu đồ trực quan.
- 1.3.NC1a: Thao tác tổ chức, lưu trữ đám mây (Drive, OneDrive), dùng thư mục dùng chung.
- 1.3.NC1b: Sắp xếp dữ liệu trong môi trường có cấu trúc. Gợi ý: Nén/giải nén, xuất file định dạng phù hợp (PDF, PNG).

MIỀN II: GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ (NC1)
- 2.1.NC1a: Sử dụng nhiều công nghệ số để tương tác (Blog, bình luận, email).
- 2.1.NC1b: Chọn phương tiện giao tiếp phù hợp bối cảnh.
- 2.2.NC1a: Chia sẻ dữ liệu qua nhiều công cụ (Google Drive, Trello, Padlet).
- 2.2.NC1b: Hướng dẫn người khác chia sẻ thông tin.
- 2.2.NC1c: Áp dụng phương pháp tham chiếu và ghi nguồn.
- 2.3.NC1a: Đề xuất dịch vụ số tham gia xã hội (An toàn giao thông, chống bắt nạt mạng).
- 2.3.NC1b: Sử dụng công nghệ số như một công dân tích cực.
- 2.4.NC1a: Đề xuất công cụ hợp tác (Track Changes, Suggestion Mode, lịch chung).
- 2.5.NC1a: Áp dụng chuẩn mực hành vi (Netiquette). Gợi ý: Chọn phương thức giao tiếp hiệu quả cho dự án.
- 2.5.NC1c: Xem xét khía cạnh đa dạng văn hóa. Gợi ý: Xây dựng hồ sơ LinkedIn chuyên nghiệp.
- 2.6.NC1a: Quản lý nhiều danh tính số.
- 2.6.NC1b: Bảo vệ danh tính trực tuyến. Gợi ý: Quyền riêng tư khi chia sẻ CV, hiểu về siêu dữ liệu (metadata) ảnh.

MIỀN III: SÁNG TẠO NỘI DUNG SỐ (NC1)
- 3.1.NC1a: Tạo/chỉnh sửa nội dung đa dạng (Sơ đồ tư duy MindMeister, Video hướng dẫn, Siêu văn bản).
- 3.1.NC1b: Thể hiện bản thân qua nội dung số. Gợi ý: Dùng Styles và Templates chuyên nghiệp.
- 3.2.NC1a: Tích hợp, tinh chỉnh nội dung. Gợi ý: Scan tài liệu giấy, chuyển đổi PDF, thêm phụ đề video.
- 3.3.NC1a: Áp dụng bản quyền và giấy phép (Creative Commons).
- 3.4.NC1a: Lập trình giải quyết vấn đề. Gợi ý: Thiết lập bộ lọc email, lập trình cảm biến (Arduino).

MIỀN IV: AN TOÀN (NC1)
- 4.1.NC1a: Bảo vệ thiết bị (Diệt virus, cập nhật OS).
- 4.1.NC1b: Nhận biết rủi ro (Mã độc Trojan, email giả mạo).
- 4.1.NC1c: Áp dụng biện pháp bảo mật (HTTPS, xác thực 2 yếu tố OTP).
- 4.2.NC1a: Bảo vệ dữ liệu cá nhân (Quản lý cookie, chế độ ẩn danh).
- 4.3.NC1a: Tránh rủi ro sức khỏe (Screen time, sàng lọc thông tin tránh quá tải).
- 4.4.NC1a: Bảo vệ môi trường. Gợi ý: Xử lý rác thải điện tử (End-of-Life).

MIỀN V: GIẢI QUYẾT VẤN ĐỀ (NC1)
- 5.1.NC1a: Đánh giá vấn đề kỹ thuật. Gợi ý: Tìm trợ giúp kỹ thuật tin cậy, vẽ flowchart quy trình.
- 5.2.NC1b: Chọn giải pháp công nghệ tối ưu. Gợi ý: So sánh phần mềm mã nguồn mở (LibreOffice) và độc quyền.
- 5.3.NC1a: Sáng tạo quy trình mới. Gợi ý: Tạo FAQ có siêu liên kết, đề xuất chỉnh sửa trên GitHub.
- 5.4.NC1a: Tự xác định lỗ hổng năng lực số và lập kế hoạch tự học (Coursera, Udemy).

MIỀN VI: ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (NC1)
- 6.1.NC1a: Phân tích cách AI hoạt động.
- 6.1.NC1b: So sánh các hệ thống AI (GenAI).
- 6.2.NC1a: Phát triển ứng dụng AI tùy chỉnh.
- 6.2.NC1c: Đánh giá rủi ro đạo đức AI.
- 6.3.NC1a: Đánh giá độ chính xác và tin cậy của kết quả AI.
`;

export function createIntegrationTextPrompt(keHoachText: string, monHoc: string, khoiLop: string): string {
  const mucDoInfo = LEVEL_MAPPING[khoiLop];
  const isNC1 = khoiLop === "Lớp 10" || khoiLop === "Lớp 11" || khoiLop === "Lớp 12";
  
  if (!mucDoInfo) {
    throw new Error(`Chưa hỗ trợ ${khoiLop}`);
  }

  return `Bạn là Chuyên gia Sư phạm số. Nhiệm vụ: Tích hợp Năng lực số (NLS) sâu vào giáo án ${monHoc} ${khoiLop}.

Cấp độ NLS áp dụng: ${mucDoInfo.ten} (${mucDoInfo.kyHieu}).

THAM CHIẾU CHI TIẾT KHUNG NLS NC1 (LỚP 10-12):
${isNC1 ? KHUNG_NLS_NC1_DETAIL : "Sử dụng các năng lực cơ bản tương ứng cấp độ."}

Dưới đây là nội dung giáo án gốc:
"""
${keHoachText.substring(0, 30000)} 
"""

### YÊU CẦU QUAN TRỌNG CHO CẤP ĐỘ NC1:
1. **Sử dụng chính xác mã chỉ báo**: Phải dùng các mã như 1.1.NC1b, 2.4.NC1a, 6.1.NC1b...
2. **Vận dụng gợi ý sư phạm**: Ưu tiên đưa vào các hoạt động như:
   - Tổ chức "Truy tìm kho báu" thông tin số (1.1).
   - So sánh độ tin cậy của các nguồn tin khác nhau về cùng một vấn đề (1.2).
   - Sử dụng công cụ hợp tác (Track Changes, Shared Folders) trong làm việc nhóm (2.4).
   - Thiết kế sơ đồ tư duy (Mindmap) hoặc video hướng dẫn (3.1).
   - Phân tích rủi ro đạo đức hoặc độ tin cậy khi sử dụng AI (Miền VI).
3. **Giữ tính đặc thù môn học**: Ví dụ môn Toán dùng GeoGebra, môn Văn dùng Blog/Canva, môn Lý dùng mô phỏng PhET hoặc lập trình cảm biến.

### YÊU CẦU ĐẦU RA:
Dùng chính xác các thẻ phân cách sau:

===BAT_DAU_MUC_TIEU===
(Viết 3-4 gạch đầu dòng mục tiêu NLS. Cấu trúc: [Mã NLS]: [Yêu cầu cần đạt]. Ví dụ: 1.2.NC1a: Thực hiện đánh giá được độ tin cậy của các nguồn dữ liệu...)
===KET_THUC_MUC_TIEU===

===BAT_DAU_HOC_LIEU===
(Liệt kê thiết bị/phần mềm/nền tảng số cụ thể sẽ sử dụng)
===KET_THUC_HOC_LIEU===

===BAT_DAU_HOAT_DONG===
ANCHOR: (Trích dẫn 1 câu trong giáo án gốc)
CONTENT: (**➤ Tích hợp NLS ([Mã]):** Mô tả hoạt động sư phạm cụ thể dựa trên gợi ý của khung năng lực. GV yêu cầu gì? HS thực hiện thao tác số gì?)
---PHAN_CACH_HOAT_DONG---
...
===KET_THUC_HOAT_DONG===

===BAT_DAU_PHU_LUC===
(Tạo Bảng Markdown: Mã NLS | Yêu cầu cần đạt | Hoạt động cụ thể của học sinh trong bài này)
===KET_THUC_PHU_LUC===
`;
}

/**
 * Extracts raw text from Docx using Mammoth
 */
export async function extractTextFromDocx(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target?.result;
      if (!mammoth) {
        reject(new Error('Thư viện Mammoth chưa được tải.'));
        return;
      }
      mammoth.extractRawText({ arrayBuffer: arrayBuffer })
        .then((result: any) => {
          resolve(result.value);
        })
        .catch((err: any) => reject(err));
    };
    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(file);
  });
}
