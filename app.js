/**
 * ==============================================================================
 * TRI ÂN THẦY CÔ - TRƯỜNG THCS SỐ 2 HIẾU GIANG
 * Kịch bản tương tác chính (app.js)
 * Tích hợp: Tìm kiếm, CRUD Thầy Cô, Bức thư tay 3D, Ghi âm giọng nói thực tế,
 * Lưu trữ IndexedDB & LocalStorage, Hiệu ứng hoa & tim bay, Tự sinh mã QR & In ấn
 * ==============================================================================
 */

// ==============================================================================
// 1. DỮ LIỆU MẶC ĐỊNH THẦY CÔ TRƯỜNG THCS SỐ 2 HIẾU GIANG
// ==============================================================================
const DEFAULT_TEACHERS = [
  {
    id: "hg-01",
    gender: "Cô",
    name: "Lê Thị Thu Hà",
    subject: "Ngữ Văn",
    theme: "rose",
    classSign: "Tập thể học sinh niên khóa 2023 - 2027",
    message: `Kính gửi Cô Thu Hà thân thương của chúng em!

Những giờ Văn của Cô chưa bao giờ chỉ là những trang sách giáo khoa đơn thuần. Từng vần thơ, từng bài bút ký Cô giảng như mở ra cả một khung trời đầy ắp tình yêu quê hương, đất nước và sự thấu cảm giữa con người với con người. 

Cô đã dạy chúng em biết rung động trước một chiếc lá rơi mùa thu, biết rơi nước mắt trước nỗi đau của những số phận bất hạnh và biết trân trọng từng phút giây của tuổi trẻ. Nét chữ mềm mại và nụ cười ấm áp của Cô trên bục giảng sẽ mãi là hành trang quý giá theo chúng em suốt cuộc đời.

Nhân ngày Nhà giáo Việt Nam 20/11, chúng em kính chúc Cô luôn luôn dồi dào sức khỏe, ngập tràn niềm vui, trẻ trung và mãi giữ trọn ngọn lửa đam mê truyền cảm hứng cho bao thế hệ học trò!`,
    hasAudio: true,
    audioTitle: "Lời nhắn gửi Cô Thu Hà từ lớp 9A"
  },
  {
    id: "hg-02",
    gender: "Thầy",
    name: "Nguyễn Văn Hưng",
    subject: "Toán Học & BGH",
    theme: "amber",
    classSign: "Chi đội Nguyễn Văn Trỗi - THCS Số 2 Hiếu Giang",
    message: `Kính gửi Thầy Hiệu trưởng Nguyễn Văn Hưng kính mến!

Người ta thường bảo những con số, hàm số và hình học không gian thật khô khan và hóc búa. Thế nhưng qua từng bài giảng của Thầy, môn Toán bỗng trở nên diệu kỳ và gần gũi đến lạ. Thầy không chỉ dạy chúng em cách tìm ra nghiệm của một phương trình, mà còn dạy chúng em cách kiên nhẫn vượt qua thử thách và tìm lời giải cho những bài toán của cuộc sống.

Dưới sự tận tụy và định hướng sáng suốt của Thầy, mái trường THCS Số 2 Hiếu Giang ngày càng khang trang, ấm áp như ngôi nhà thứ hai của chúng em.

Chúng em kính chúc Thầy luôn mạnh khỏe, hạnh phúc và vững tay chèo dẫn dắt con thuyền tri thức của trường THCS Số 2 Hiếu Giang cập bến vinh quang!`,
    hasAudio: true,
    audioTitle: "Lời tri ân Thầy Hiệu Trưởng"
  },
  {
    id: "hg-03",
    gender: "Thầy",
    name: "Lê Quốc Đạt",
    subject: "Tin Học",
    theme: "sky",
    classSign: "Đội tuyển Tin học trẻ & Học sinh toàn trường",
    message: `Thầy Đạt kính mến!

Từ những dòng lệnh 'Hello World' bỡ ngỡ ban đầu cho đến những thuật toán lập trình phức tạp, Thầy đã mở ra trước mắt chúng em cánh cửa rộng lớn của thế giới số và công nghệ. 

Thầy luôn kiên nhẫn sửa từng dấu chấm phẩy, từng lỗi logic (bug) trong bài học và truyền cho chúng em niềm say mê khám phá vô tận. Thầy nhắc chúng em rằng: 'Trong kỷ nguyên số, sáng tạo và tư duy chính là đôi cánh bay cao nhất'.

Nhân ngày 20/11, chúng em xin kính chúc Thầy có thật nhiều sức khỏe, luôn tràn đầy năng lượng sáng tạo và gặt hái thêm nhiều thành công trên hành trình chắp cánh ước mơ công nghệ cho học trò Hiếu Giang!`,
    hasAudio: false,
    audioTitle: "Ghi âm gửi Thầy Đạt"
  },
  {
    id: "hg-04",
    gender: "Cô",
    name: "Hoàng Mai Linh",
    subject: "Tiếng Anh",
    theme: "mint",
    classSign: "Câu lạc bộ Tiếng Anh (English Club)",
    message: `Dear Ms. Mai Linh!

Happy Vietnamese Teachers' Day! 

Cảm ơn Cô vì những tiết học Tiếng Anh luôn tràn ngập tiếng cười, những trò chơi thú vị và những giai điệu quốc tế đầy hứng khởi. Nhờ có Cô, rào cản ngôn ngữ đã dần được xóa bỏ, chúng em tự tin hơn mỗi khi cất lời chào và ước mơ bước ra biển lớn thế giới.

Cô không chỉ là một giáo viên dạy ngoại ngữ giỏi, mà còn là người bạn lớn luôn lắng nghe, cổ vũ chúng em vượt qua sự rụt rè của bản thân.

We wish you happiness, good health, and immense success. Thank you for being such an inspiring teacher to all of us!`,
    hasAudio: true,
    audioTitle: "Lời chúc tiếng Anh từ học sinh gửi Cô Linh"
  },
  {
    id: "hg-05",
    gender: "Cô",
    name: "Phạm Thùy Dung",
    subject: "Khoa Học Tự Nhiên / Vật Lý",
    theme: "lavender",
    classSign: "Học sinh khối 7 & 8",
    message: `Kính gửi Cô Thùy Dung!

Nhờ những thí nghiệm sống động và lời giảng hóm hỉnh của Cô, các định luật quang học, cơ học và dòng điện không còn là những công thức khô cứng trong sách giáo khoa nữa. Cô đã thắp lên trong lòng chúng em ngọn lửa tò mò về thế giới tự nhiên xung quanh.

Chúng em nhớ mãi ánh mắt lấp lánh của Cô mỗi khi một nhóm học sinh hoàn thành xuất sắc bài thực hành. Cảm ơn Cô vì sự kiên nhẫn vô bờ bến!

Kính chúc Cô một ngày 20/11 ngập tràn hoa tươi, niềm vui và luôn giữ mãi nụ cười rạng rỡ bên chúng em!`,
    hasAudio: false,
    audioTitle: "Thu âm lời chúc gửi Cô Dung"
  },
  {
    id: "hg-06",
    gender: "Thầy",
    name: "Nguyễn Hữu Phước",
    subject: "Lịch Sử",
    theme: "amber",
    classSign: "Học sinh khối 9",
    message: `Kính gửi Thầy Hữu Phước kính mến!

Những câu chuyện lịch sử hào hùng của dân tộc Việt Nam và mảnh đất Quảng Trị kiên cường qua giọng kể trầm ấm của Thầy đã ngấm sâu vào tâm trí từng đứa học trò chúng em. Thầy dạy chúng em hiểu rằng: 'Muốn đi xa tới tương lai, trước hết phải thấu suốt và biết ơn nguồn cội'.

Cảm ơn Thầy đã truyền cho chúng em lòng tự hào dân tộc và ý thức trách nhiệm của người trẻ với non sông gấm vóc.

Kính chúc Thầy dồi dào sức khỏe, luôn an vui và tiếp tục là người truyền lửa lịch sử đầy nhiệt huyết của trường THCS Số 2 Hiếu Giang!`,
    hasAudio: false,
    audioTitle: "Ghi âm gửi Thầy Phước"
  },
  {
    id: "hg-07",
    gender: "Cô",
    name: "Đặng Ngọc Ánh",
    subject: "Hóa Học",
    theme: "rose",
    classSign: "Tập thể lớp 8B",
    message: `Kính gửi Cô Ngọc Ánh!

Môn Hóa trong mắt chúng em trước kia là ma trận của các phương trình phản ứng phức tạp. Nhưng từ khi được học Cô, mỗi ống nghiệm đổi màu, mỗi phản ứng tỏa nhiệt hay kết tủa đều như một phép màu diệu kỳ.

Cô đã dạy chúng em rằng tình thầy trò cũng như một phản ứng cộng hưởng: càng thấu hiểu thì càng bền chặt và ấm áp.

Chúng em kính chúc Cô có một ngày 20/11 thật nhiều xúc động, luôn xinh đẹp, hạnh phúc và tiếp tục tạo nên những 'phản ứng hóa học' tuyệt vời của tình thương yêu!`,
    hasAudio: false,
    audioTitle: "Lời nhắn gửi Cô Ánh"
  },
  {
    id: "hg-08",
    gender: "Thầy",
    name: "Đoàn Văn Long",
    subject: "Giáo Dục Thể Chất",
    theme: "mint",
    classSign: "Đội thể thao trường THCS Số 2 Hiếu Giang",
    message: `Thầy Long kính mến!

Những tiếng còi rộn rã, những giọt mồ hôi trên sân trường dưới cái nắng miền Trung và những bài tập rèn luyện thể lực của Thầy đã giúp chúng em có một cơ thể dẻo dai và một tinh thần đồng đội bất diệt.

Thầy luôn dạy chúng em tinh thần 'fair play', sự kiên trì không bỏ cuộc và cách đứng dậy sau mỗi lần vấp ngã. 

Nhân ngày 20/11, chúng em kính chúc Thầy luôn tràn đầy sinh lực, giữ mãi phong độ thể thao và tiếp tục đồng hành cùng chúng em trên mọi sân chơi!`,
    hasAudio: false,
    audioTitle: "Lời chúc gửi Thầy Long"
  }
];

// Mẫu lời chúc theo bộ môn để người dùng tạo nhanh
const SUBJECT_WISH_TEMPLATES = {
  "Văn": "Những bài giảng văn ấm áp của Thầy/Cô đã nuôi dưỡng tâm hồn chúng em, dạy chúng em biết yêu thương cuộc sống và trân quý từng nét đẹp bình dị nhất.",
  "Toán": "Từng con số, từng hình vẽ của Thầy/Cô đã rèn luyện cho chúng em tư duy logic, sự kiên trì vượt khó và cách tìm lời giải cho những bài toán cuộc đời.",
  "Anh": "Cảm ơn Thầy/Cô đã mở ra cánh cửa nhìn ra thế giới rộng lớn, giúp chúng em tự tin giao tiếp và theo đuổi ước mơ vươn xa.",
  "Tin": "Từng dòng mã lệnh, từng thuật toán của Thầy/Cô đã thắp sáng niềm đam mê công nghệ và tư duy sáng tạo của chúng em trong kỷ nguyên số.",
  "Sử": "Cảm ơn Thầy/Cô đã đưa chúng em ngược dòng thời gian, bồi đắp lòng tự hào dân tộc và lòng biết ơn sâu sắc đối với các thế hệ tiền nhân.",
  "Địa": "Những bài học về sông núi, biển đảo quê hương đã bồi đắp trong chúng em tình yêu với dải đất hình chữ S tươi đẹp và trù phú.",
  "Hóa": "Mỗi phản ứng kỳ diệu trong tiết Hóa của Thầy/Cô như tình cảm thầy trò: luôn ấm áp, bền chặt và tỏa sáng rực rỡ.",
  "Lý": "Những định luật tự nhiên qua bài giảng của Thầy/Cô đã biến những điều kỳ bí thành niềm say mê khám phá khoa học bất tận.",
  "Nhạc": "Những nốt nhạc du dương và lời ca của Cô đã làm dịu đi những căng thẳng học tập, nuôi dưỡng tâm hồn học trò thêm trong trẻo.",
  "Mỹ thuật": "Cảm ơn Thầy/Cô đã trao cho chúng em cây cọ sắc màu để vẽ nên ước mơ rực rỡ của tuổi hoa niên."
};

// ==============================================================================
// 2. LƯU TRỮ ÂM THANH INDEXEDDB (HỖ TRỢ FILE LỚN & KHÔNG BỊ GIỚI HẠN 5MB)
// ==============================================================================
class AudioStore {
  constructor() {
    this.dbName = "THCS2_HieuGiang_AudioDB";
    this.storeName = "voice_recordings";
    this.db = null;
  }

  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: "teacherId" });
        }
      };
      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve();
      };
      request.onerror = (e) => reject(e);
    });
  }

  async saveAudio(teacherId, blob, meta = {}) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], "readwrite");
      const store = tx.objectStore(this.storeName);
      const data = {
        teacherId,
        blob,
        type: blob.type,
        updatedAt: new Date().toISOString(),
        ...meta
      };
      const req = store.put(data);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async getAudio(teacherId) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], "readonly");
      const store = tx.objectStore(this.storeName);
      const req = store.get(teacherId);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async deleteAudio(teacherId) {
    if (!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction([this.storeName], "readwrite");
      const store = tx.objectStore(this.storeName);
      const req = store.delete(teacherId);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async countAudio() {
    if (!this.db) await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction([this.storeName], "readonly");
      const store = tx.objectStore(this.storeName);
      const req = store.count();
      req.onsuccess = () => resolve(req.result || 0);
      req.onerror = () => resolve(0);
    });
  }
}

// ==============================================================================
// 3. BỘ MÃ HÓA ÂM THANH MẪU (SYNTHESIZED SOOTHING CHORD AUDIO FOR DEMO)
// ==============================================================================
// Tạo audio WAV êm dịu làm mẫu giọng đọc/lời chúc để giáo viên có thể bấm nghe ngay
function generateSampleAudioBlob(teacherName = "Thầy Cô") {
  const sampleRate = 22050;
  const duration = 8; // 8 giây demo êm dịu
  const numSamples = sampleRate * duration;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  // WAV header
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + numSamples * 2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true); // PCM
  view.setUint16(20, 1, true); // Mono
  view.setUint16(22, 1, true); // 1 channel
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, numSamples * 2, true);

  // Chuỗi nốt acoustic ấm áp: C4, E4, G4, B4, C5 (giai điệu tri ân nhẹ nhàng)
  const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 440.00, 349.23, 261.63];
  let offset = 44;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const noteIdx = Math.floor((t / duration) * notes.length) % notes.length;
    const freq = notes[noteIdx];
    
    // Tạo sóng tổng hợp piano / chime có decay mềm mại
    const noteTime = t % (duration / notes.length);
    const envelope = Math.exp(-noteTime * 3.5);
    const sample = Math.sin(2 * Math.PI * freq * t) * envelope * 0.45 +
                   Math.sin(2 * Math.PI * (freq * 2) * t) * envelope * 0.15;
    
    const intSample = Math.max(-32768, Math.min(32767, Math.floor(sample * 32767)));
    view.setInt16(offset, intSample, true);
    offset += 2;
  }

  return new Blob([view], { type: 'audio/wav' });
}

// ==============================================================================
// 4. BỘ ĐIỀU KHIỂN NHẠC NỀN SYNTHESIZER (WEB AUDIO API)
// ==============================================================================
class AmbientMusicGenerator {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playChord() {
    if (!this.isPlaying || !this.ctx) return;
    
    // Hợp âm Lofi học trò: Cmaj7 -> Am7 -> Fmaj7 -> G7
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];

    const currentChord = chords[Math.floor(Math.random() * chords.length)];
    const now = this.ctx.currentTime;

    currentChord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + idx * 0.15 + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.15 + 3.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.15);
      osc.stop(now + idx * 0.15 + 4.0);
    });

    this.timer = setTimeout(() => this.playChord(), 3500);
  }

  toggle() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.playChord();
    } else {
      clearTimeout(this.timer);
    }
    return this.isPlaying;
  }
}

// ==============================================================================
// 5. HIỆU ỨNG HOA HƯỚNG DƯƠNG & TRÁI TIM LƠ LỬNG TRÊN CANVAS
// ==============================================================================
class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.isRunning = true;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.createParticles(36);
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createParticles(count) {
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.spawnParticle(true));
    }
  }

  spawnParticle(randomY = false) {
    const isFlower = Math.random() > 0.45;
    return {
      type: isFlower ? 'flower' : 'heart',
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : this.height + 40,
      size: 14 + Math.random() * 20,
      speedY: 0.6 + Math.random() * 1.2,
      speedX: (Math.random() - 0.5) * 0.8,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.03,
      opacity: 0.55 + Math.random() * 0.45,
      color: isFlower ? null : ['#FDA4AF', '#F43F5E', '#FCD34D', '#FB7185'][Math.floor(Math.random() * 4)]
    };
  }

  drawHeart(ctx, x, y, size, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
    ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.fill();
    ctx.restore();
  }

  drawSunflower(ctx, x, y, size, rotation, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = opacity;

    // Cánh hoa hướng dương vàng rực rỡ
    const petals = 12;
    ctx.fillStyle = '#FBBF24';
    for (let i = 0; i < petals; i++) {
      ctx.rotate((Math.PI * 2) / petals);
      ctx.beginPath();
      ctx.ellipse(0, size * 0.45, size * 0.16, size * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Nhụy hoa màu nâu hạt dẻ
    ctx.fillStyle = '#78350F';
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.32, 0, Math.PI * 2);
    ctx.fill();

    // Điểm nhấn vòng nhụy trong
    ctx.fillStyle = '#92400E';
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.18, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.y -= p.speedY;
      p.wobble += p.wobbleSpeed;
      p.x += Math.sin(p.wobble) * 0.9 + p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.type === 'flower') {
        this.drawSunflower(this.ctx, p.x, p.y, p.size, p.rotation, p.opacity);
      } else {
        this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
      }

      // Khi hạt trôi khỏi đỉnh màn hình thì tái tạo lại ở đáy
      if (p.y < -50 || p.x < -50 || p.x > this.width + 50) {
        this.particles[i] = this.spawnParticle(false);
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  toggle() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.animate();
    } else {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
    return this.isRunning;
  }
}

// ==============================================================================
// 6. ỨNG DỤNG CHÍNH (MAIN APP CLASS)
// ==============================================================================
class TriAnApp {
  constructor() {
    this.storageKey = "THCS2_HIEUGIANG_TEACHERS_V1";
    this.teachers = [];
    this.currentTeacher = null;
    this.currentGenderFilter = "all";
    this.currentSubjectFilter = "all";
    this.searchQuery = "";
    this.isEnvelopeOpen = false;

    // Các thành phần phụ trợ
    this.audioStore = new AudioStore();
    this.bgmGenerator = new AmbientMusicGenerator();
    this.particleEffect = null;

    // Trình phát Audio lời chúc
    this.audioElement = document.getElementById("realVoiceAudio");
    this.isPlayingVoice = false;
    this.audioCurrentObjectUrl = null;

    // Ghi âm trực tiếp
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordingInterval = null;
    this.recordDurationSeconds = 0;
    this.recordedBlob = null;

    // QR Code instance
    this.qrCodeInstance = null;
  }

  async init() {
    // 1. Khởi tạo canvas hiệu ứng
    this.particleEffect = new ParticleCanvas("particleCanvas");

    // 2. Khởi tạo IndexedDB
    try {
      await this.audioStore.init();
    } catch (e) {
      console.warn("Không khởi tạo được IndexedDB, tiếp tục với bộ nhớ dự phòng:", e);
    }

    // 3. Tải danh sách giáo viên
    this.loadTeachersData();

    // 4. Bắt các sự kiện DOM
    this.bindEvents();

    // 5. Kiểm tra hash URL (nếu mở từ QR code có mã ?id hoặc #teacher-xxx)
    this.checkUrlForTeacher();

    // 6. Cập nhật giao diện ban đầu
    this.renderSubjectDropdown();
    this.renderTeacherGrid();
    this.updateStatsCounters();

    // Nếu có thầy cô, hiển thị người đầu tiên
    if (this.teachers.length > 0 && !this.currentTeacher) {
      this.selectTeacher(this.teachers[0].id, false);
    }
  }

  // --------------------------------------------------------------------------
  // DỮ LIỆU & LOCAL STORAGE
  // --------------------------------------------------------------------------
  loadTeachersData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        this.teachers = JSON.parse(saved);
      } catch (e) {
        console.error("Lỗi đọc LocalStorage, khôi phục mặc định:", e);
        this.teachers = [...DEFAULT_TEACHERS];
        this.saveTeachersToStorage();
      }
    } else {
      this.teachers = [...DEFAULT_TEACHERS];
      this.saveTeachersToStorage();
    }
  }

  saveTeachersToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.teachers));
    this.updateStatsCounters();
  }

  resetToDefaultData() {
    if (confirm("Bạn có chắc chắn muốn khôi phục danh sách thầy cô về mặc định của trường THCS Số 2 Hiếu Giang không? Các chỉnh sửa của bạn sẽ được thiết lập lại.")) {
      this.teachers = [...DEFAULT_TEACHERS];
      this.saveTeachersToStorage();
      this.renderSubjectDropdown();
      this.renderTeacherGrid();
      if (this.teachers.length > 0) {
        this.selectTeacher(this.teachers[0].id, true);
      }
      this.renderManageTable();
      this.showToast("Đã khôi phục danh sách thầy cô mẫu thành công!");
    }
  }

  exportDataToJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.teachers, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `TriAnThayCo_THCS2_HieuGiang_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Đã xuất file sao lưu JSON thành công!");
  }

  importDataFromJson(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported) && imported.length > 0) {
          this.teachers = imported;
          this.saveTeachersToStorage();
          this.renderSubjectDropdown();
          this.renderTeacherGrid();
          this.selectTeacher(this.teachers[0].id, true);
          this.renderManageTable();
          this.showToast(`Đã nhập thành công ${imported.length} thầy cô từ file!`);
        } else {
          alert("File JSON không hợp lệ hoặc danh sách rỗng.");
        }
      } catch (err) {
        alert("Lỗi khi đọc file JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  // --------------------------------------------------------------------------
  // BẮT SỰ KIỆN GIAO DIỆN
  // --------------------------------------------------------------------------
  bindEvents() {
    // Nút hiệu ứng & Nhạc nền nổi
    document.getElementById("toggleParticlesBtn").addEventListener("click", (e) => {
      const active = this.particleEffect.toggle();
      const btn = e.currentTarget;
      btn.classList.toggle("active", active);
      btn.querySelector(".btn-text").textContent = active ? "Hiệu ứng: Bật" : "Hiệu ứng: Tắt";
    });

    document.getElementById("toggleBgmBtn").addEventListener("click", (e) => {
      const active = this.bgmGenerator.toggle();
      const btn = e.currentTarget;
      btn.classList.toggle("active", active);
      btn.querySelector(".btn-text").textContent = active ? "Nhạc nền: Bật" : "Nhạc nền: Tắt";
    });

    // Bộ lọc danh xưng (Tất cả / Thầy / Cô)
    document.querySelectorAll(".gender-filter-group .filter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".gender-filter-group .filter-chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentGenderFilter = btn.dataset.gender;
        this.renderTeacherGrid();
      });
    });

    // Bộ lọc bộ môn
    document.getElementById("subjectFilter").addEventListener("change", (e) => {
      this.currentSubjectFilter = e.target.value;
      this.renderTeacherGrid();
    });

    // Ô tìm kiếm thời gian thực
    const searchInput = document.getElementById("searchInput");
    const clearBtn = document.getElementById("clearSearchBtn");

    searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      clearBtn.style.display = this.searchQuery ? "block" : "none";
      this.renderTeacherGrid();
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      this.searchQuery = "";
      clearBtn.style.display = "none";
      this.renderTeacherGrid();
      searchInput.focus();
    });

    // Tương tác mở/đóng phong bì thư
    const envelope = document.getElementById("interactiveEnvelope");
    envelope.addEventListener("click", (e) => {
      // Tránh đóng thư nếu đang click vào nút điều khiển audio hoặc liên kết bên trong
      if (e.target.closest("#customAudioPlayer") || e.target.closest("button")) {
        return;
      }
      this.toggleEnvelope();
    });

    document.getElementById("toggleEnvelopeStateBtn").addEventListener("click", () => {
      this.toggleEnvelope();
    });

    // Nút sửa nhanh lời chúc
    document.getElementById("quickEditWishBtn").addEventListener("click", () => {
      if (this.currentTeacher) {
        this.openEditTeacherModal(this.currentTeacher.id);
      }
    });

    // Trình phát Audio
    const playBtn = document.getElementById("playAudioBtn");
    playBtn.addEventListener("click", () => this.toggleVoiceAudio());

    this.audioElement.addEventListener("timeupdate", () => this.updateAudioProgress());
    this.audioElement.addEventListener("ended", () => this.onVoiceAudioEnded());
    this.audioElement.addEventListener("loadedmetadata", () => this.updateAudioTimerDisplay());

    // Thanh tua âm thanh
    document.getElementById("audioProgressContainer").addEventListener("click", (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      if (this.audioElement.duration) {
        this.audioElement.currentTime = (clickX / width) * this.audioElement.duration;
      }
    });

    // Mã QR & Tiện ích in ấn, tải ảnh, copy link
    document.getElementById("downloadQrCardBtn").addEventListener("click", () => this.downloadQrCardImage());
    document.getElementById("printQrCardBtn").addEventListener("click", () => this.printCurrentLetterAndQr());
    document.getElementById("copyShareLinkBtn").addEventListener("click", () => this.copyDirectLink());

    // Nút mở modal
    document.getElementById("openAddModalBtn").addEventListener("click", () => this.openAddTeacherModal());
    document.getElementById("openManageModalBtn").addEventListener("click", () => this.openManageModal());

    // Modal Chỉnh sửa / Thêm
    document.getElementById("closeEditModalBtn").addEventListener("click", () => this.closeModal("editTeacherModal"));
    document.getElementById("cancelEditModalBtn").addEventListener("click", () => this.closeModal("editTeacherModal"));
    document.getElementById("teacherForm").addEventListener("submit", (e) => this.handleSaveTeacherForm(e));
    document.getElementById("generateTemplateWishBtn").addEventListener("click", () => this.fillWishTemplateBySubject());

    // Modal Ghi âm & Tải audio
    document.getElementById("voiceRecordModalBtn").addEventListener("click", () => this.openVoiceRecordModal());
    document.getElementById("closeVoiceModalBtn").addEventListener("click", () => this.closeModal("voiceRecordModal"));
    
    // Tabs trong modal ghi âm
    document.getElementById("tabDirectRecord").addEventListener("click", () => this.switchVoiceTab("record"));
    document.getElementById("tabUploadAudio").addEventListener("click", () => this.switchVoiceTab("upload"));

    // Thao tác ghi âm
    document.getElementById("startRecordBtn").addEventListener("click", () => this.startRecording());
    document.getElementById("stopRecordBtn").addEventListener("click", () => this.stopRecording());

    // Thao tác tải file
    const dropZone = document.getElementById("audioDropZone");
    const fileInput = document.getElementById("audioFileInput");

    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => this.handleAudioFileSelect(e.target.files[0]));

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.style.borderColor = "var(--color-primary)";
    });
    dropZone.addEventListener("dragleave", () => {
      dropZone.style.borderColor = "#CBD5E1";
    });
    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.style.borderColor = "#CBD5E1";
      if (e.dataTransfer.files.length > 0) {
        this.handleAudioFileSelect(e.dataTransfer.files[0]);
      }
    });

    document.getElementById("saveAudioBtn").addEventListener("click", () => this.applySelectedAudio());
    document.getElementById("removeAudioBtn").addEventListener("click", () => this.removeCurrentTeacherAudio());

    // Modal Quản lý chung
    document.getElementById("closeManageModalBtn").addEventListener("click", () => this.closeModal("manageListModal"));
    document.getElementById("exportDataBtn").addEventListener("click", () => this.exportDataToJson());
    document.getElementById("importDataInput").addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        this.importDataFromJson(e.target.files[0]);
      }
    });
    document.getElementById("resetDefaultsBtn").addEventListener("click", () => this.resetToDefaultData());

    // Lắng nghe hashchange để chuyển giáo viên nếu người dùng quay lại lịch sử
    window.addEventListener("hashchange", () => this.checkUrlForTeacher());
  }

  // --------------------------------------------------------------------------
  // PHẦN 1: BỘ LỌC, DANH SÁCH & TÌM KIẾM THẦY CÔ
  // --------------------------------------------------------------------------
  renderSubjectDropdown() {
    const select = document.getElementById("subjectFilter");
    const subjects = new Set();
    this.teachers.forEach(t => subjects.add(t.subject.trim()));

    let html = `<option value="all">Tất cả bộ môn (${subjects.size})</option>`;
    subjects.forEach(sub => {
      html += `<option value="${this.escapeHtml(sub)}">${this.escapeHtml(sub)}</option>`;
    });
    select.innerHTML = html;
  }

  updateStatsCounters() {
    const total = this.teachers.length;
    const thayCount = this.teachers.filter(t => t.gender === "Thầy").length;
    const coCount = this.teachers.filter(t => t.gender === "Cô").length;
    const audioCount = this.teachers.filter(t => t.hasAudio).length;

    document.getElementById("countAll").textContent = total;
    document.getElementById("countThay").textContent = thayCount;
    document.getElementById("countCo").textContent = coCount;

    const manageTotal = document.getElementById("manageTotalCount");
    const manageAudio = document.getElementById("manageAudioCount");
    if (manageTotal) manageTotal.textContent = total;
    if (manageAudio) manageAudio.textContent = audioCount;
  }

  renderTeacherGrid() {
    const grid = document.getElementById("teacherGrid");
    const noResults = document.getElementById("noResultsState");

    // Lọc theo danh xưng, bộ môn và từ khóa tìm kiếm
    const filtered = this.teachers.filter(t => {
      // Lọc danh xưng
      if (this.currentGenderFilter !== "all" && t.gender !== this.currentGenderFilter) {
        return false;
      }
      // Lọc bộ môn
      if (this.currentSubjectFilter !== "all" && t.subject.trim() !== this.currentSubjectFilter) {
        return false;
      }
      // Lọc theo từ khóa tìm kiếm
      if (this.searchQuery) {
        const full = `${t.gender} ${t.name} ${t.subject} ${t.classSign || ""}`.toLowerCase();
        if (!full.includes(this.searchQuery)) {
          return false;
        }
      }
      return true;
    });

    if (filtered.length === 0) {
      grid.innerHTML = "";
      noResults.style.display = "block";
      return;
    }

    noResults.style.display = "none";

    let html = "";
    filtered.forEach(t => {
      const isSelected = this.currentTeacher && this.currentTeacher.id === t.id;
      const themeClass = `theme-${t.theme || (t.gender === "Cô" ? "rose" : "amber")}`;
      const icon = t.gender === "Cô" ? "fa-user" : "fa-user-tie";

      html += `
        <div class="teacher-card ${isSelected ? 'selected' : ''}" data-id="${t.id}" tabindex="0">
          <div class="card-mini-tape"></div>
          
          <div class="teacher-avatar-frame ${themeClass}">
            <i class="fa-solid ${icon}"></i>
          </div>

          <h3 class="teacher-name">${this.escapeHtml(t.gender)} ${this.escapeHtml(t.name)}</h3>
          <span class="teacher-subject-tag">${this.escapeHtml(t.subject)}</span>

          <div class="teacher-card-footer">
            <span class="card-audio-indicator">
              ${t.hasAudio ? '<i class="fa-solid fa-microphone-lines"></i> Có thu âm' : '<span style="color:#9CA3AF;"><i class="fa-regular fa-comment-dots"></i> Lời chúc</span>'}
            </span>
            <span class="card-action-select">
              Mở thư <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;

    // Gán sự kiện click cho các thẻ
    grid.querySelectorAll(".teacher-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.dataset.id;
        this.selectTeacher(id, true);
        // Tự động cuộn mượt đến bức thư
        document.getElementById("letterSection").scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  // --------------------------------------------------------------------------
  // PHẦN 2: CHỌN THẦY CÔ & TRÌNH DIỄN BỨC THƯ TAY (3D ENVELOPE)
  // --------------------------------------------------------------------------
  async selectTeacher(teacherId, openEnvelope = true) {
    const teacher = this.teachers.find(t => t.id === teacherId);
    if (!teacher) return;

    this.currentTeacher = teacher;

    // Đánh dấu thẻ được chọn trên giao diện
    document.querySelectorAll(".teacher-card").forEach(card => {
      card.classList.toggle("selected", card.dataset.id === teacher.id);
    });

    // Cập nhật thông tin trên mặt trước phong bì
    document.getElementById("envelopeRecipient").textContent = `${teacher.gender} ${teacher.name}`;
    document.getElementById("envelopeSubject").textContent = `Bộ môn: ${teacher.subject} - THCS Số 2 Hiếu Giang`;

    // Cập nhật nội dung trên bức thư giấy kẻ ngang
    document.getElementById("letterSalutation").textContent = `Kính gửi: ${teacher.gender} ${teacher.name} kính mến!`;
    document.getElementById("letterMessage").textContent = teacher.message;
    document.getElementById("signClassName").textContent = teacher.classSign || "Tập thể học sinh THCS Số 2 Hiếu Giang";

    // Cập nhật trạng thái Audio
    await this.setupAudioForCurrentTeacher();

    // Cập nhật mã QR của thầy cô
    this.generateTeacherQrCode(teacher);

    // Mở phong bì thư nếu được yêu cầu
    if (openEnvelope) {
      this.openEnvelope();
    }

    // Cập nhật URL hash để chia sẻ trực tiếp
    history.replaceState(null, null, `#letter-${teacher.id}`);
  }

  openEnvelope() {
    this.isEnvelopeOpen = true;
    const env = document.getElementById("interactiveEnvelope");
    env.classList.add("is-open");
    document.getElementById("toggleEnvelopeText").textContent = "Gập Lại Phong Bì";
  }

  closeEnvelope() {
    this.isEnvelopeOpen = false;
    const env = document.getElementById("interactiveEnvelope");
    env.classList.remove("is-open");
    document.getElementById("toggleEnvelopeText").textContent = "Mở Rộng Thư Tay";
    this.stopVoiceAudio();
  }

  toggleEnvelope() {
    if (this.isEnvelopeOpen) {
      this.closeEnvelope();
    } else {
      this.openEnvelope();
    }
  }

  // --------------------------------------------------------------------------
  // TÍCH HỢP GIỌNG ĐỌC THẬT (REAL VOICE AUDIO)
  // --------------------------------------------------------------------------
  async setupAudioForCurrentTeacher() {
    this.stopVoiceAudio();

    const teacher = this.currentTeacher;
    const statusBadge = document.getElementById("audioStatusBadge");
    const trackTitle = document.getElementById("audioTrackTitle");

    // Giải phóng Object URL cũ nếu có
    if (this.audioCurrentObjectUrl) {
      URL.revokeObjectURL(this.audioCurrentObjectUrl);
      this.audioCurrentObjectUrl = null;
    }

    // Kiểm tra âm thanh trong IndexedDB trước
    let audioRecord = null;
    try {
      audioRecord = await this.audioStore.getAudio(teacher.id);
    } catch (e) {
      console.warn("Lỗi đọc IndexedDB:", e);
    }

    if (audioRecord && audioRecord.blob) {
      this.audioCurrentObjectUrl = URL.createObjectURL(audioRecord.blob);
      this.audioElement.src = this.audioCurrentObjectUrl;
      statusBadge.textContent = "Bản thu âm thực tế";
      statusBadge.style.background = "var(--color-sage-light)";
      statusBadge.style.color = "var(--color-sage)";
      trackTitle.textContent = audioRecord.title || teacher.audioTitle || `Giọng đọc gửi ${teacher.gender} ${teacher.name}`;
      teacher.hasAudio = true;
    } else if (teacher.hasAudio) {
      // Tạo âm thanh mẫu êm dịu nếu thầy cô có cờ hasAudio nhưng chưa có file upload riêng
      const sampleBlob = generateSampleAudioBlob(`${teacher.gender} ${teacher.name}`);
      this.audioCurrentObjectUrl = URL.createObjectURL(sampleBlob);
      this.audioElement.src = this.audioCurrentObjectUrl;
      statusBadge.textContent = "Giọng đọc mẫu";
      statusBadge.style.background = "var(--color-primary-light)";
      statusBadge.style.color = "var(--color-primary)";
      trackTitle.textContent = teacher.audioTitle || `Bản ghi âm gửi ${teacher.gender} ${teacher.name}`;
    } else {
      this.audioElement.src = "";
      statusBadge.textContent = "Chưa có bản thu";
      statusBadge.style.background = "#F3F4F6";
      statusBadge.style.color = "#9CA3AF";
      trackTitle.textContent = `Chưa có giọng đọc (Bấm "Đổi giọng đọc" để thêm)`;
    }

    this.resetAudioPlayerUI();
  }

  toggleVoiceAudio() {
    if (!this.audioElement.src || this.audioElement.src === window.location.href) {
      // Nếu chưa có âm thanh, mở modal để ghi âm ngay
      this.openVoiceRecordModal();
      return;
    }

    if (this.isPlayingVoice) {
      this.audioElement.pause();
      this.isPlayingVoice = false;
      this.updatePlayBtnIcon(false);
    } else {
      this.audioElement.play().then(() => {
        this.isPlayingVoice = true;
        this.updatePlayBtnIcon(true);
      }).catch(err => {
        console.warn("Không phát được audio:", err);
      });
    }
  }

  stopVoiceAudio() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.isPlayingVoice = false;
    this.updatePlayBtnIcon(false);
    this.resetAudioPlayerUI();
  }

  onVoiceAudioEnded() {
    this.isPlayingVoice = false;
    this.updatePlayBtnIcon(false);
    this.resetAudioPlayerUI();
  }

  updatePlayBtnIcon(isPlaying) {
    const playBtn = document.getElementById("playAudioBtn");
    playBtn.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
    playBtn.title = isPlaying ? "Tạm dừng giọng đọc" : "Phát giọng đọc của học sinh";
  }

  resetAudioPlayerUI() {
    document.getElementById("audioProgressBar").style.width = "0%";
    document.getElementById("audioTimer").textContent = "00:00 / 00:00";
  }

  updateAudioProgress() {
    if (!this.audioElement.duration) return;
    const progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    document.getElementById("audioProgressBar").style.width = `${progress}%`;
    this.updateAudioTimerDisplay();
  }

  updateAudioTimerDisplay() {
    const cur = this.formatTime(this.audioElement.currentTime || 0);
    const dur = this.formatTime(this.audioElement.duration || 0);
    document.getElementById("audioTimer").textContent = `${cur} / ${dur}`;
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // --------------------------------------------------------------------------
  // PHẦN 3: TỰ SINH MÃ QR, TẢI ẢNH & TIỆN ÍCH IN ẤN
  // --------------------------------------------------------------------------
  generateTeacherQrCode(teacher) {
    const qrContainer = document.getElementById("qrcodeContainer");
    qrContainer.innerHTML = "";

    // Cập nhật thẻ xem trước QR
    document.getElementById("qrCardTeacherName").textContent = `${teacher.gender} ${teacher.name}`;
    document.getElementById("qrCardSubject").textContent = `Bộ môn: ${teacher.subject} - THCS Số 2 Hiếu Giang`;

    // Tạo URL dẫn trực tiếp tới bức thư của thầy cô
    const shareUrl = `${window.location.origin}${window.location.pathname}#letter-${teacher.id}`;

    // Khởi tạo thư viện QRCode
    if (typeof QRCode !== "undefined") {
      this.qrCodeInstance = new QRCode(qrContainer, {
        text: shareUrl,
        width: 170,
        height: 170,
        colorDark: "#1E293B",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      qrContainer.innerHTML = `<p style="color:red;">Đang tải mã QR...</p>`;
    }
  }

  downloadQrCardImage() {
    if (!this.currentTeacher) return;
    const teacher = this.currentTeacher;

    // Sử dụng Canvas để vẽ một tấm thiệp lưu niệm tuyệt đẹp với mã QR sắc nét
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = 800;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    // 1. Nền thiệp màu kem ấm áp & viền scrapbook
    ctx.fillStyle = "#FAF7F0";
    ctx.fillRect(0, 0, width, height);

    // Khung viền nét đứt đôi
    ctx.strokeStyle = "#D97706";
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, width - 60, height - 60);

    ctx.strokeStyle = "#EADBCC";
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    // 2. Băng dính Washi Tape trang trí trên đỉnh
    ctx.fillStyle = "rgba(251, 191, 36, 0.75)";
    ctx.fillRect(width / 2 - 100, 16, 200, 36);

    // 3. Tiêu đề trường học
    ctx.textAlign = "center";
    ctx.fillStyle = "#B45309";
    ctx.font = "bold 24px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("TRƯỜNG THCS SỐ 2 HIẾU GIANG", width / 2, 95);

    ctx.fillStyle = "#6B7280";
    ctx.font = "italic 18px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("THIỆP TRI ÂN THẦY CÔ & BÁO TƯỜNG 20/11", width / 2, 130);

    // Đường kẻ phân cách
    ctx.strokeStyle = "#E5E7EB";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 155);
    ctx.lineTo(width - 100, 155);
    ctx.stroke();

    // 4. Tên Thầy Cô & Môn học
    ctx.fillStyle = "#1F2937";
    ctx.font = "bold 34px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`Kính gửi: ${teacher.gender} ${teacher.name}`, width / 2, 210);

    ctx.fillStyle = "#D97706";
    ctx.font = "600 22px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(`Bộ môn: ${teacher.subject}`, width / 2, 250);

    // 5. Lấy hình ảnh QR Code từ container
    const qrImg = document.querySelector("#qrcodeContainer img") || document.querySelector("#qrcodeContainer canvas");
    if (qrImg) {
      const qrSize = 340;
      const qrX = (width - qrSize) / 2;
      const qrY = 290;

      // Nền trắng cho mã QR
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0,0,0,0.1)";
      ctx.shadowBlur = 15;
      ctx.fillRect(qrX - 16, qrY - 16, qrSize + 32, qrSize + 32);
      ctx.shadowBlur = 0; // reset shadow

      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
    }

    // 6. Hướng dẫn quét mã
    ctx.fillStyle = "#B45309";
    ctx.font = "bold 20px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("📱 Quét mã QR để mở bức thư tay & nghe giọng đọc của học sinh", width / 2, 700);

    // 7. Câu danh ngôn tri ân
    ctx.fillStyle = "#F43F5E";
    ctx.font = "italic 22px 'Patrick Hand', 'Dancing Script', cursive, sans-serif";
    ctx.fillText('"Nét bút tri ân - Vạn lời kính chúc gửi người gieo hạt"', width / 2, 755);

    // 8. Chữ ký lớp học
    ctx.fillStyle = "#4B5563";
    ctx.font = "600 20px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(teacher.classSign || "Tập thể học sinh THCS Số 2 Hiếu Giang thân tặng", width / 2, 810);

    // Chân trang lưu niệm
    ctx.fillStyle = "#9CA3AF";
    ctx.font = "16px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("Lưu bút kỷ yếu & Tri ân ngày Nhà giáo Việt Nam 20/11", width / 2, 920);

    // 9. Kích hoạt tải ảnh PNG
    const link = document.createElement("a");
    link.download = `Thiep_QR_${teacher.gender}_${teacher.name.replace(/\s+/g, '_')}_THCS2HieuGiang.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    link.remove();

    this.showToast("Đã tải ảnh thiệp QR độ phân giải cao thành công!");
  }

  printCurrentLetterAndQr() {
    if (!this.currentTeacher) return;
    this.openEnvelope(); // Đảm bảo thư mở khi in
    window.print();
  }

  copyDirectLink() {
    if (!this.currentTeacher) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}#letter-${this.currentTeacher.id}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        this.showToast("Đã sao chép liên kết thư vào bộ nhớ tạm!");
      }).catch(() => {
        prompt("Sao chép liên kết bên dưới:", shareUrl);
      });
    } else {
      prompt("Sao chép liên kết bên dưới:", shareUrl);
    }
  }

  checkUrlForTeacher() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#letter-")) {
      const id = hash.replace("#letter-", "");
      const found = this.teachers.find(t => t.id === id);
      if (found) {
        this.selectTeacher(found.id, true);
      }
    }
  }

  // --------------------------------------------------------------------------
  // MODAL: THÊM & SỬA THẦY CÔ
  // --------------------------------------------------------------------------
  openAddTeacherModal() {
    document.getElementById("editModalTitle").textContent = "Thêm Thầy/Cô Mới";
    document.getElementById("formTeacherId").value = "";
    document.getElementById("formGender").value = "Cô";
    document.getElementById("formName").value = "";
    document.getElementById("formSubject").value = "";
    document.getElementById("formClassSign").value = "Tập thể học sinh THCS Số 2 Hiếu Giang";
    document.getElementById("formMessage").value = "";
    this.setThemeRadioValue("rose");
    this.openModal("editTeacherModal");
  }

  openEditTeacherModal(teacherId) {
    const teacher = this.teachers.find(t => t.id === teacherId);
    if (!teacher) return;

    document.getElementById("editModalTitle").textContent = "Chỉnh Sửa Thông Tin Thầy/Cô";
    document.getElementById("formTeacherId").value = teacher.id;
    document.getElementById("formGender").value = teacher.gender;
    document.getElementById("formName").value = teacher.name;
    document.getElementById("formSubject").value = teacher.subject;
    document.getElementById("formClassSign").value = teacher.classSign || "";
    document.getElementById("formMessage").value = teacher.message;
    this.setThemeRadioValue(teacher.theme || "rose");
    this.openModal("editTeacherModal");
  }

  setThemeRadioValue(value) {
    const radio = document.querySelector(`input[name="cardTheme"][value="${value}"]`);
    if (radio) radio.checked = true;
  }

  getThemeRadioValue() {
    const selected = document.querySelector('input[name="cardTheme"]:checked');
    return selected ? selected.value : "rose";
  }

  fillWishTemplateBySubject() {
    const subject = document.getElementById("formSubject").value.trim();
    const gender = document.getElementById("formGender").value;
    const name = document.getElementById("formName").value.trim() || `${gender} kính mến`;

    let matchedWish = "";
    for (const [key, template] of Object.entries(SUBJECT_WISH_TEMPLATES)) {
      if (subject.toLowerCase().includes(key.toLowerCase())) {
        matchedWish = template;
        break;
      }
    }

    if (!matchedWish) {
      matchedWish = "Cảm ơn Thầy/Cô đã luôn tận tụy, hết lòng vì học sinh thân yêu. Chúng em kính chúc Thầy/Cô dồi dào sức khỏe, niềm vui và luôn giữ mãi ngọn lửa nhiệt huyết với sự nghiệp trồng người!";
    }

    const fullMessage = `Kính gửi ${gender} ${name}!

${matchedWish}

Nhân ngày Nhà giáo Việt Nam 20/11, chúng em xin kính chúc ${gender} luôn luôn mạnh khỏe, trẻ trung, ngập tràn hạnh phúc và gặt hái thêm nhiều thành công rực rỡ bên mái trường THCS Số 2 Hiếu Giang!`;

    document.getElementById("formMessage").value = fullMessage;
    this.showToast("Đã chèn mẫu lời chúc gợi ý theo môn học!");
  }

  handleSaveTeacherForm(e) {
    e.preventDefault();

    const id = document.getElementById("formTeacherId").value;
    const gender = document.getElementById("formGender").value;
    const name = document.getElementById("formName").value.trim();
    const subject = document.getElementById("formSubject").value.trim();
    const classSign = document.getElementById("formClassSign").value.trim();
    const message = document.getElementById("formMessage").value.trim();
    const theme = this.getThemeRadioValue();

    if (!name || !subject || !message) {
      alert("Vui lòng điền đầy đủ các thông tin bắt buộc (*)");
      return;
    }

    if (id) {
      // Cập nhật thầy cô hiện có
      const teacher = this.teachers.find(t => t.id === id);
      if (teacher) {
        teacher.gender = gender;
        teacher.name = name;
        teacher.subject = subject;
        teacher.classSign = classSign;
        teacher.message = message;
        teacher.theme = theme;
        this.showToast(`Đã cập nhật thông tin ${gender} ${name}!`);
      }
    } else {
      // Thêm mới
      const newTeacher = {
        id: "hg-" + Date.now().toString(36),
        gender,
        name,
        subject,
        classSign,
        message,
        theme,
        hasAudio: false,
        audioTitle: `Giọng đọc gửi ${gender} ${name}`
      };
      this.teachers.unshift(newTeacher);
      this.showToast(`Đã thêm ${gender} ${name} vào danh sách!`);
      this.currentTeacher = newTeacher;
    }

    this.saveTeachersToStorage();
    this.renderSubjectDropdown();
    this.renderTeacherGrid();
    this.selectTeacher(id || this.currentTeacher.id, true);
    this.closeModal("editTeacherModal");
  }

  // --------------------------------------------------------------------------
  // MODAL: GHI ÂM & TẢI FILE ÂM THANH THỰC TẾ
  // --------------------------------------------------------------------------
  openVoiceRecordModal() {
    if (!this.currentTeacher) return;
    this.recordedBlob = null;
    document.getElementById("recordTimer").textContent = "00:00";
    document.getElementById("recordStateLabel").textContent = "Nhấn nút bên dưới để bắt đầu ghi âm giọng nói của lớp";
    document.getElementById("startRecordBtn").style.display = "inline-flex";
    document.getElementById("stopRecordBtn").style.display = "none";
    document.getElementById("micVisualizer").classList.remove("recording");
    document.getElementById("saveAudioBtn").disabled = true;
    document.getElementById("audioPreviewContainer").style.display = "none";
    document.getElementById("previewAudioElement").src = "";

    this.switchVoiceTab("record");
    this.openModal("voiceRecordModal");
  }

  switchVoiceTab(tab) {
    const isRecord = tab === "record";
    document.getElementById("tabDirectRecord").classList.toggle("active", isRecord);
    document.getElementById("tabUploadAudio").classList.toggle("active", !isRecord);
    document.getElementById("recordBoxSection").style.display = isRecord ? "block" : "none";
    document.getElementById("uploadBoxSection").style.display = isRecord ? "none" : "block";
  }

  async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        this.recordedBlob = new Blob(this.audioChunks, { type: "audio/webm" });
        this.setupAudioPreview(this.recordedBlob);
        // Tắt micro stream
        stream.getTracks().forEach(track => track.stop());
      };

      this.mediaRecorder.start();

      // Cập nhật giao diện khi đang ghi âm
      document.getElementById("startRecordBtn").style.display = "none";
      document.getElementById("stopRecordBtn").style.display = "inline-flex";
      document.getElementById("micVisualizer").classList.add("recording");
      document.getElementById("recordStateLabel").textContent = "Đang thu âm... Hãy nói to, rõ ràng và truyền cảm nhé!";

      this.recordDurationSeconds = 0;
      this.recordingInterval = setInterval(() => {
        this.recordDurationSeconds++;
        document.getElementById("recordTimer").textContent = this.formatTime(this.recordDurationSeconds);
      }, 1000);

    } catch (err) {
      alert("Không thể truy cập Microphone: " + err.message + "\nBạn có thể chọn tab 'Tải file ghi âm' để tải file ghi sẵn từ điện thoại lên!");
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
      clearInterval(this.recordingInterval);
      document.getElementById("startRecordBtn").style.display = "inline-flex";
      document.getElementById("stopRecordBtn").style.display = "none";
      document.getElementById("micVisualizer").classList.remove("recording");
      document.getElementById("recordStateLabel").textContent = "Đã hoàn thành ghi âm!";
    }
  }

  handleAudioFileSelect(file) {
    if (!file) return;
    if (!file.type.startsWith("audio/")) {
      alert("Vui lòng chọn tệp tin âm thanh hợp lệ (MP3, WAV, M4A, OGG, WEBM)!");
      return;
    }

    this.recordedBlob = file;
    this.setupAudioPreview(file);
    this.showToast(`Đã nhận file: ${file.name}`);
  }

  setupAudioPreview(blob) {
    const previewAudio = document.getElementById("previewAudioElement");
    previewAudio.src = URL.createObjectURL(blob);
    document.getElementById("audioPreviewContainer").style.display = "block";
    document.getElementById("saveAudioBtn").disabled = false;
  }

  async applySelectedAudio() {
    if (!this.recordedBlob || !this.currentTeacher) return;

    try {
      await this.audioStore.saveAudio(this.currentTeacher.id, this.recordedBlob, {
        title: `Giọng đọc học sinh gửi ${this.currentTeacher.gender} ${this.currentTeacher.name}`
      });

      this.currentTeacher.hasAudio = true;
      this.saveTeachersToStorage();
      await this.setupAudioForCurrentTeacher();
      this.renderTeacherGrid();
      this.closeModal("voiceRecordModal");
      this.showToast("Đã lưu bản ghi âm thực tế thành công!");
    } catch (err) {
      alert("Lỗi khi lưu âm thanh: " + err.message);
    }
  }

  async removeCurrentTeacherAudio() {
    if (!this.currentTeacher) return;
    if (confirm("Bạn có muốn xóa bản thu âm của Thầy/Cô này không?")) {
      await this.audioStore.deleteAudio(this.currentTeacher.id);
      this.currentTeacher.hasAudio = false;
      this.saveTeachersToStorage();
      await this.setupAudioForCurrentTeacher();
      this.renderTeacherGrid();
      this.closeModal("voiceRecordModal");
      this.showToast("Đã xóa bản thu âm!");
    }
  }

  // --------------------------------------------------------------------------
  // MODAL: QUẢN LÝ TỔNG THỂ & BẢNG DANH SÁCH
  // --------------------------------------------------------------------------
  openManageModal() {
    this.renderManageTable();
    this.openModal("manageListModal");
  }

  renderManageTable() {
    const tbody = document.getElementById("manageTableBody");
    let html = "";

    this.teachers.forEach(t => {
      html += `
        <tr>
          <td><span class="filter-chip" style="padding: 2px 8px; font-size: 0.8rem;">${this.escapeHtml(t.gender)}</span></td>
          <td><strong>${this.escapeHtml(t.name)}</strong></td>
          <td>${this.escapeHtml(t.subject)}</td>
          <td>${t.hasAudio ? '<span style="color:#059669;"><i class="fa-solid fa-check"></i> Có</span>' : '<span style="color:#9CA3AF;">Chưa</span>'}</td>
          <td>
            <div class="table-btn-group">
              <button class="tbl-btn" onclick="app.quickEditFromTable('${t.id}')" title="Sửa">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="tbl-btn delete" onclick="app.quickDeleteFromTable('${t.id}')" title="Xóa">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }

  quickEditFromTable(id) {
    this.closeModal("manageListModal");
    this.openEditTeacherModal(id);
  }

  quickDeleteFromTable(id) {
    const teacher = this.teachers.find(t => t.id === id);
    if (!teacher) return;

    if (confirm(`Bạn có chắc chắn muốn xóa ${teacher.gender} ${teacher.name} khỏi danh sách không?`)) {
      this.teachers = this.teachers.filter(t => t.id !== id);
      this.saveTeachersToStorage();
      this.renderSubjectDropdown();
      this.renderTeacherGrid();
      this.renderManageTable();

      // Nếu đang chọn người bị xóa, chọn người đầu tiên
      if (this.currentTeacher && this.currentTeacher.id === id) {
        if (this.teachers.length > 0) {
          this.selectTeacher(this.teachers[0].id, false);
        } else {
          this.currentTeacher = null;
        }
      }
      this.showToast(`Đã xóa ${teacher.gender} ${teacher.name}!`);
    }
  }

  // --------------------------------------------------------------------------
  // TIỆN ÍCH CHUNG
  // --------------------------------------------------------------------------
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  }

  showToast(message) {
    const toast = document.getElementById("toastNotification");
    const msg = document.getElementById("toastMessage");
    msg.textContent = message;
    toast.style.display = "flex";

    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.style.display = "none";
    }, 3200);
  }

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Khởi chạy ứng dụng khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  window.app = new TriAnApp();
  window.app.init();
});
