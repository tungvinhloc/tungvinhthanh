
import { StudentRecord, Assessment, StudentAssessmentResponse } from "../types";

const ACADEMIC_PHRASES: Record<string, string[]> = {
  "Tốt": [
    "Học tập xuất sắc, nắm vững kiến thức các môn học, có tinh thần tự giác cao.",
    "Tiếp thu bài nhanh, tư duy logic tốt, tích cực trong các hoạt động học tập.",
    "Kết quả học tập rất ấn tượng, có tố chất thông minh và sự chuẩn bị bài kỹ lưỡng.",
    "Nắm vững kiến thức trọng tâm, có kỹ năng làm bài tốt và thái độ học tập nghiêm túc."
  ],
  "Khá": [
    "Có ý thức học tập tốt, nắm vững kiến thức cơ bản, kết quả các môn đồng đều.",
    "Chăm chỉ, nỗ lực trong học tập, cần phát huy hơn nữa ở các môn tư duy.",
    "Hoàn thành tốt các nhiệm vụ học tập, có tinh thần cầu tiến và thái độ đúng mực.",
    "Kiến thức nền tảng vững, nếu nỗ lực hơn nữa sẽ đạt kết quả cao hơn."
  ],
  "Đạt": [
    "Hoàn thành các nhiệm vụ học tập ở mức cơ bản, cần tập trung hơn trong giờ học.",
    "Có cố gắng trong học tập nhưng kết quả còn chưa ổn định, cần rèn luyện thêm kỹ năng tự học.",
    "Nắm được kiến thức cơ bản, cần nỗ lực nhiều hơn ở các môn tự nhiên.",
    "Cần chú tâm hơn vào việc làm bài tập về nhà và ôn luyện kiến thức cũ."
  ],
  "Chưa đạt": [
    "Kết quả học tập còn hạn chế, cần sự quan tâm sát sao hơn từ gia đình và giáo viên.",
    "Chưa tập trung trong giờ học, kiến thức hổng nhiều, cần nỗ lực vượt bậc trong thời gian tới.",
    "Học lực yếu, cần dành nhiều thời gian hơn cho việc học và ôn tập các kiến thức căn bản.",
    "Thái độ học tập chưa tốt, thường xuyên thiếu bài tập, cần nghiêm túc sửa đổi."
  ]
};

const CONDUCT_PHRASES: Record<string, string[]> = {
  "Tốt": [
    "Ngoan ngoãn, lễ phép, chấp hành nghiêm túc mọi nội quy của nhà trường và lớp.",
    "Có tinh thần trách nhiệm cao, tích cực tham gia các phong trào và hoạt động tập thể.",
    "Gương mẫu trong mọi hoạt động, là tấm gương sáng về đạo đức và tác phong.",
    "Hòa đồng với bạn bè, có lối sống lành mạnh và ý thức cộng đồng tốt."
  ],
  "Khá": [
    "Thực hiện tốt các quy định của trường lớp, thái độ cư xử đúng mực với giáo viên và bạn bè.",
    "Có ý thức rèn luyện đạo đức, tích cực tham gia các hoạt động chung.",
    "Tác phong nhanh nhẹn, hòa đồng, tuy nhiên đôi lúc còn cần nhắc nhở về nề nếp.",
    "Chấp hành tốt nội quy, có tinh thần tương thân tương ái với bạn bè."
  ],
  "Đạt": [
    "Thực hiện được các nội quy cơ bản, cần chú ý hơn về trang phục và giờ giấc.",
    "Ít tham gia các hoạt động tập thể, cần cởi mở và năng nổ hơn với lớp.",
    "Đôi khi còn vi phạm nội quy nhỏ, cần rút kinh nghiệm và rèn luyện bản thân nhiều hơn.",
    "Cần chú ý tu dưỡng đạo đức và nghiêm túc hơn trong các giờ sinh hoạt tập thể."
  ],
  "Chưa đạt": [
    "Thường xuyên vi phạm nội quy, thái độ rèn luyện chưa tốt, cần nghiêm túc sửa đổi.",
    "Chưa có ý thức kỷ luật, gây ảnh hưởng đến thi đua của lớp, cần sự giáo dục nghiêm khắc.",
    "Cần điều chỉnh hành vi và thái độ ứng xử đối với giáo viên và các bạn xung quanh.",
    "Vi phạm quy chế trường học nhiều lần, cần cam kết sửa đổi để tiến bộ."
  ]
};

const getRandomPhrase = (phrases: string[], rank: string): string => {
  const list = phrases || ["Chưa có nhận xét cụ thể cho mức độ này."];
  // Sử dụng một logic đơn giản để chọn phrase dựa trên tên học sinh để giữ nhận xét nhất quán
  return list[Math.floor(Math.random() * list.length)];
};

export const generateLocalAssessment = (student: StudentRecord): StudentAssessmentResponse => {
  const result: StudentAssessmentResponse = {
    hk1: { hocTap: "", renLuyen: "" },
    caNam: { hocTap: "", renLuyen: "" }
  };

  // Xử lý HK1
  if (student.hasHK1Data) {
    let ht = getRandomPhrase(ACADEMIC_PHRASES[student.kqhtHK1] || ACADEMIC_PHRASES["Đạt"], student.kqhtHK1);
    let rl = getRandomPhrase(CONDUCT_PHRASES[student.kqrlHK1] || CONDUCT_PHRASES["Đạt"], student.kqrlHK1);
    
    if (student.absencesHK1 > 5) {
      rl += ` Cần chú ý đi học chuyên cần hơn (vắng ${student.absencesHK1} buổi).`;
    }
    
    result.hk1 = { hocTap: ht, renLuyen: rl };
  }

  // Xử lý Cả năm
  if (student.hasCNData) {
    let ht = getRandomPhrase(ACADEMIC_PHRASES[student.kqhtCN] || ACADEMIC_PHRASES["Đạt"], student.kqhtCN);
    let rl = getRandomPhrase(CONDUCT_PHRASES[student.kqrlCN] || CONDUCT_PHRASES["Đạt"], student.kqrlCN);
    
    // Thêm nhận xét về sự tiến bộ nếu có dữ liệu cả 2 kỳ
    if (student.hasHK1Data) {
      if (student.kqhtCN === "Tốt" && student.kqhtHK1 !== "Tốt") {
        ht = "Có sự tiến bộ vượt bậc so với học kỳ I. " + ht;
      }
    }

    if (student.absencesCN > 10) {
      rl += ` Tổng số buổi vắng cả năm khá nhiều (${student.absencesCN} buổi), cần khắc phục trong năm học tới.`;
    }

    result.caNam = { hocTap: ht, renLuyen: rl };
  }

  return result;
};
