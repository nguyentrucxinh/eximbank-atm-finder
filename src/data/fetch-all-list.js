document.write('<link  type=text/css rel=stylesheet href=http://webapi.diadiem.com/css/common.css>');
document.write('<link  type=text/css rel=stylesheet href=http://webapi.diadiem.com/EximBank/css/style.css>');
document.write('<link  type=text/css rel=stylesheet href=http://webapi.diadiem.com/EximBank/css/styleIE.css>');
document.write('<script language=javascript type=text/javascript src=http://webapi.diadiem.com/EximBank/scripts/Eximbank.js ></script>');
var aLS = 'eximbank,companyinfo';
var aKS = '5549585F52505E5Eexi3';
var aAS = 0;
var aMS = 17108;
var aPN = 'eximbank';
var aPI = '59';
var okie = true;
var httpURL = 'http://webapi.diadiem.com/';
var httpiURL = 'http://wwwi.diadiem.com/';
var httpss = '02oszynv125vdg3njnxap0sh9122017155321724';
var http2s = '02oszynv125vdg3njnxap0sh2017';
var oParam = {
  'stpe': '2',
  'sID': '2',
  'cID': '8',
  'tID': '0',
  'A': '878506_2479886',
  'P': '1',
  'st': 'SaiGon',
  'R': '20'
};
var strDistWard = [{
  'DID': '18',
  'DName': '1',
  'NameVN': '1',
  'listWard': [{
    'WID': '14',
    'WName': 'BEN NGHE',
    'NameVN': 'BẾN NGHÉ',
    'iNum': '2147483647'
  }, {
    'WID': '21',
    'WName': 'BEN THANH',
    'NameVN': 'BẾN THÀNH',
    'iNum': '2147483647'
  }, {
    'WID': '20',
    'WName': 'CAU KHO',
    'NameVN': 'CẦU KHO',
    'iNum': '2147483647'
  }, {
    'WID': '15',
    'WName': 'Cau Ong Lanh',
    'NameVN': 'Cầu Ông Lãnh',
    'iNum': '2147483647'
  }, {
    'WID': '24',
    'WName': 'CO GIANG',
    'NameVN': 'CÔ GIANG',
    'iNum': '2147483647'
  }, {
    'WID': '16',
    'WName': 'DA KAO',
    'NameVN': 'ĐA KAO',
    'iNum': '2147483647'
  }, {
    'WID': '18',
    'WName': 'NGUYEN CU TRINH',
    'NameVN': 'NGUYỄN CƯ TRINH',
    'iNum': '2147483647'
  }, {
    'WID': '19',
    'WName': 'NGUYEN THAI BINH',
    'NameVN': 'NGUYỄN THÁI BÌNH',
    'iNum': '2147483647'
  }, {
    'WID': '22',
    'WName': 'PHAM NGU LAO',
    'NameVN': 'PHẠM NGŨ LÃO',
    'iNum': '2147483647'
  }, {
    'WID': '17',
    'WName': 'Tan Dinh',
    'NameVN': 'Tân Định',
    'iNum': '2147483647'
  }]
}, {
  'DID': '42',
  'DName': '2',
  'NameVN': '2',
  'listWard': [{
    'WID': '117',
    'WName': 'AN KHANH',
    'NameVN': 'AN KHÁNH',
    'iNum': '2147483647'
  }, {
    'WID': '256',
    'WName': 'An Loi Dong',
    'NameVN': 'An Lợi Đông',
    'iNum': '2147483647'
  }, {
    'WID': '119',
    'WName': 'AN PHU',
    'NameVN': 'AN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '115',
    'WName': 'BINH AN',
    'NameVN': 'BÌNH AN',
    'iNum': '2147483647'
  }, {
    'WID': '114',
    'WName': 'BINH KHANH',
    'NameVN': 'BÌNH KHÁNH',
    'iNum': '2147483647'
  }, {
    'WID': '190',
    'WName': 'BINH TRUNG DONG',
    'NameVN': 'BÌNH TRƯNG ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '126',
    'WName': 'BINH TRUNG TAY',
    'NameVN': 'BÌNH TRƯNG TÂY',
    'iNum': '2147483647'
  }, {
    'WID': '121',
    'WName': 'CAT LAI',
    'NameVN': 'CÁT LÁI',
    'iNum': '2147483647'
  }, {
    'WID': '150',
    'WName': 'PHUOC LONG B',
    'NameVN': 'PHƯỚC LONG B',
    'iNum': '2147483647'
  }, {
    'WID': '169',
    'WName': 'THANH LOC',
    'NameVN': 'THẠNH LỘC',
    'iNum': '2147483647'
  }, {
    'WID': '123',
    'WName': 'THANH MY LOI',
    'NameVN': 'THẠNH MỸ LỢI',
    'iNum': '2147483647'
  }, {
    'WID': '113',
    'WName': 'THAO DIEN',
    'NameVN': 'THẢO ĐIỀN',
    'iNum': '2147483647'
  }, {
    'WID': '116',
    'WName': 'THU THIEM',
    'NameVN': 'THỦ THIÊM',
    'iNum': '2147483647'
  }]
}, {
  'DID': '17',
  'DName': '3',
  'NameVN': '3',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }]
}, {
  'DID': '21',
  'DName': '4',
  'NameVN': '4',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }, {
    'WID': '26',
    'WName': '16',
    'NameVN': '16',
    'iNum': '16'
  }, {
    'WID': '30',
    'WName': '18',
    'NameVN': '18',
    'iNum': '18'
  }]
}, {
  'DID': '20',
  'DName': '5',
  'NameVN': '5',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }]
}, {
  'DID': '25',
  'DName': '6',
  'NameVN': '6',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }]
}, {
  'DID': '41',
  'DName': '7',
  'NameVN': '7',
  'listWard': [{
    'WID': '39',
    'WName': 'BINH THUAN',
    'NameVN': 'BÌNH THUẬN',
    'iNum': '2147483647'
  }, {
    'WID': '40',
    'WName': 'PHU MY',
    'NameVN': 'PHÚ MỸ',
    'iNum': '2147483647'
  }, {
    'WID': '38',
    'WName': 'PHU THUAN',
    'NameVN': 'PHÚ THUẬN',
    'iNum': '2147483647'
  }, {
    'WID': '33',
    'WName': 'TAN HUNG',
    'NameVN': 'TÂN HƯNG',
    'iNum': '2147483647'
  }, {
    'WID': '35',
    'WName': 'TAN KIENG',
    'NameVN': 'TÂN KIỂNG',
    'iNum': '2147483647'
  }, {
    'WID': '42',
    'WName': 'TAN PHONG',
    'NameVN': 'TÂN PHONG',
    'iNum': '2147483647'
  }, {
    'WID': '37',
    'WName': 'TAN PHU',
    'NameVN': 'TÂN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '41',
    'WName': 'TAN QUY',
    'NameVN': 'TÂN QUY',
    'iNum': '2147483647'
  }, {
    'WID': '247',
    'WName': 'Tan Quy',
    'NameVN': 'Tân Quý',
    'iNum': '2147483647'
  }, {
    'WID': '36',
    'WName': 'TAN THUAN DONG',
    'NameVN': 'TÂN THUẬN ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '34',
    'WName': 'TAN THUAN TAY',
    'NameVN': 'TÂN THUẬN TÂY',
    'iNum': '2147483647'
  }]
}, {
  'DID': '37',
  'DName': '8',
  'NameVN': '8',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }, {
    'WID': '26',
    'WName': '16',
    'NameVN': '16',
    'iNum': '16'
  }]
}, {
  'DID': '43',
  'DName': '9',
  'NameVN': '9',
  'listWard': [{
    'WID': '142',
    'WName': 'HIEP PHU',
    'NameVN': 'HIỆP PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '209',
    'WName': 'LONG BINH',
    'NameVN': 'LONG BÌNH',
    'iNum': '2147483647'
  }, {
    'WID': '145',
    'WName': 'LONG THANH MY',
    'NameVN': 'LONG THẠNH MỸ',
    'iNum': '2147483647'
  }, {
    'WID': '148',
    'WName': 'LONG TRUONG',
    'NameVN': 'LONG TRƯỜNG',
    'iNum': '2147483647'
  }, {
    'WID': '191',
    'WName': 'PHU HUU',
    'NameVN': 'PHÚ HỮU',
    'iNum': '2147483647'
  }, {
    'WID': '154',
    'WName': 'Phuoc Binh',
    'NameVN': 'Phước Bình',
    'iNum': '2147483647'
  }, {
    'WID': '143',
    'WName': 'PHUOC LONG A',
    'NameVN': 'PHƯỚC LONG A',
    'iNum': '2147483647'
  }, {
    'WID': '150',
    'WName': 'PHUOC LONG B',
    'NameVN': 'PHƯỚC LONG B',
    'iNum': '2147483647'
  }, {
    'WID': '37',
    'WName': 'TAN PHU',
    'NameVN': 'TÂN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '144',
    'WName': 'TANG NHON PHU A',
    'NameVN': 'TĂNG NHƠN PHÚ A',
    'iNum': '2147483647'
  }, {
    'WID': '149',
    'WName': 'TANG NHON PHU B',
    'NameVN': 'TĂNG NHƠN PHÚ B',
    'iNum': '2147483647'
  }, {
    'WID': '146',
    'WName': 'TRUONG THANH',
    'NameVN': 'TRƯỜNG THẠNH',
    'iNum': '2147483647'
  }]
}, {
  'DID': '19',
  'DName': '10',
  'NameVN': '10',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }]
}, {
  'DID': '24',
  'DName': '11',
  'NameVN': '11',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }, {
    'WID': '26',
    'WName': '16',
    'NameVN': '16',
    'iNum': '16'
  }]
}, {
  'DID': '44',
  'DName': '12',
  'NameVN': '12',
  'listWard': [{
    'WID': '172',
    'WName': 'AN PHU DONG',
    'NameVN': 'AN PHÚ ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '166',
    'WName': 'BA DIEM',
    'NameVN': 'BÀ ĐIỂM',
    'iNum': '2147483647'
  }, {
    'WID': '120',
    'WName': 'DONG HUNG THUAN',
    'NameVN': 'ĐÔNG HƯNG THUẬN',
    'iNum': '2147483647'
  }, {
    'WID': '174',
    'WName': 'HIEP THANH',
    'NameVN': 'HIỆP THÀNH',
    'iNum': '2147483647'
  }, {
    'WID': '175',
    'WName': 'TAN CHANH HIEP',
    'NameVN': 'TÂN CHÁNH HIỆP',
    'iNum': '2147483647'
  }, {
    'WID': '281',
    'WName': 'TAN HUNG THUAN',
    'NameVN': 'TÂN HƯNG THUẬN',
    'iNum': '2147483647'
  }, {
    'WID': '171',
    'WName': 'TAN THOI HIEP',
    'NameVN': 'TÂN THỚI HIỆP',
    'iNum': '2147483647'
  }, {
    'WID': '137',
    'WName': 'Tan Thoi Nhat',
    'NameVN': 'Tân Thới Nhất',
    'iNum': '2147483647'
  }, {
    'WID': '169',
    'WName': 'THANH LOC',
    'NameVN': 'THẠNH LỘC',
    'iNum': '2147483647'
  }, {
    'WID': '168',
    'WName': 'THANH XUAN',
    'NameVN': 'THẠNH XUÂN',
    'iNum': '2147483647'
  }, {
    'WID': '170',
    'WName': 'THOI AN',
    'NameVN': 'THỚI AN',
    'iNum': '2147483647'
  }, {
    'WID': '167',
    'WName': 'Trung Chanh',
    'NameVN': 'Trung Chánh',
    'iNum': '2147483647'
  }, {
    'WID': '138',
    'WName': 'TRUNG MY TAY',
    'NameVN': 'TRUNG MỸ TÂY',
    'iNum': '2147483647'
  }]
}, {
  'DID': '36',
  'DName': 'Binh Chanh',
  'NameVN': 'Bình Chánh',
  'listWard': [{
    'WID': '186',
    'WName': 'AN PHU TAY',
    'NameVN': 'AN PHÚ TÂY',
    'iNum': '2147483647'
  }, {
    'WID': '212',
    'WName': 'Binh Chanh',
    'NameVN': 'Bình Chánh',
    'iNum': '2147483647'
  }, {
    'WID': '94',
    'WName': 'Binh Hung',
    'NameVN': 'Bình Hưng',
    'iNum': '2147483647'
  }, {
    'WID': '255',
    'WName': 'Hung Long',
    'NameVN': 'Hưng Long',
    'iNum': '2147483647'
  }, {
    'WID': '250',
    'WName': 'Le Minh Xuan',
    'NameVN': 'Lê Minh Xuân',
    'iNum': '2147483647'
  }, {
    'WID': '251',
    'WName': 'PHAM VAN HAI',
    'NameVN': 'PHẠM VĂN HAI',
    'iNum': '2147483647'
  }, {
    'WID': '300',
    'WName': 'Phong Phu',
    'NameVN': 'Phong Phú',
    'iNum': '2147483647'
  }, {
    'WID': '254',
    'WName': 'Quy Duc',
    'NameVN': 'Quy Đức',
    'iNum': '2147483647'
  }, {
    'WID': '187',
    'WName': 'TAN KIEN',
    'NameVN': 'TÂN KIÊN',
    'iNum': '2147483647'
  }, {
    'WID': '252',
    'WName': 'Tan Nhut',
    'NameVN': 'Tân Nhựt',
    'iNum': '2147483647'
  }, {
    'WID': '189',
    'WName': 'TAN QUY TAY',
    'NameVN': 'TÂN QUÝ TÂY',
    'iNum': '2147483647'
  }, {
    'WID': '188',
    'WName': 'Tan Tuc',
    'NameVN': 'Tân Túc',
    'iNum': '2147483647'
  }, {
    'WID': '218',
    'WName': 'VINH LOC A',
    'NameVN': 'VĨNH LỘC A',
    'iNum': '2147483647'
  }, {
    'WID': '217',
    'WName': 'VINH LOC B',
    'NameVN': 'VĨNH LỘC B',
    'iNum': '2147483647'
  }, {
    'WID': '219',
    'WName': 'XUAN THOI THUONG',
    'NameVN': 'XUÂN THỚI THƯỢNG',
    'iNum': '2147483647'
  }]
}, {
  'DID': '39',
  'DName': 'Binh Tan',
  'NameVN': 'Bình Tân',
  'listWard': [{
    'WID': '96',
    'WName': 'AN LAC',
    'NameVN': 'AN LẠC',
    'iNum': '2147483647'
  }, {
    'WID': '65',
    'WName': 'AN LAC A',
    'NameVN': 'AN LẠC A',
    'iNum': '2147483647'
  }, {
    'WID': '99',
    'WName': 'BINH HUNG HOA',
    'NameVN': 'BÌNH HƯNG HÒA',
    'iNum': '2147483647'
  }, {
    'WID': '122',
    'WName': 'BINH HUNG HOA A',
    'NameVN': 'BÌNH HƯNG HÒA A',
    'iNum': '2147483647'
  }, {
    'WID': '178',
    'WName': 'BINH HUNG HOA B',
    'NameVN': 'BÌNH HƯNG HÒA B',
    'iNum': '2147483647'
  }, {
    'WID': '64',
    'WName': 'BINH TRI DONG',
    'NameVN': 'BÌNH TRỊ ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '152',
    'WName': 'BINH TRI DONG A',
    'NameVN': 'BÌNH TRỊ ĐÔNG A',
    'iNum': '2147483647'
  }, {
    'WID': '125',
    'WName': 'BINH TRI DONG B',
    'NameVN': 'BÌNH TRỊ ĐÔNG B',
    'iNum': '2147483647'
  }, {
    'WID': '250',
    'WName': 'Le Minh Xuan',
    'NameVN': 'Lê Minh Xuân',
    'iNum': '2147483647'
  }, {
    'WID': '49',
    'WName': 'PHU THO HOA',
    'NameVN': 'PHÚ THỌ HÒA',
    'iNum': '2147483647'
  }, {
    'WID': '187',
    'WName': 'TAN KIEN',
    'NameVN': 'TÂN KIÊN',
    'iNum': '2147483647'
  }, {
    'WID': '153',
    'WName': 'TAN TAO',
    'NameVN': 'TÂN TẠO',
    'iNum': '2147483647'
  }, {
    'WID': '124',
    'WName': 'TAN TAO A',
    'NameVN': 'TÂN TẠO A',
    'iNum': '2147483647'
  }]
}, {
  'DID': '31',
  'DName': 'Binh Thanh',
  'NameVN': 'Bình Thạnh',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }, {
    'WID': '27',
    'WName': '17',
    'NameVN': '17',
    'iNum': '17'
  }, {
    'WID': '31',
    'WName': '19',
    'NameVN': '19',
    'iNum': '19'
  }, {
    'WID': '53',
    'WName': '21',
    'NameVN': '21',
    'iNum': '21'
  }, {
    'WID': '54',
    'WName': '22',
    'NameVN': '22',
    'iNum': '22'
  }, {
    'WID': '56',
    'WName': '24',
    'NameVN': '24',
    'iNum': '24'
  }, {
    'WID': '57',
    'WName': '25',
    'NameVN': '25',
    'iNum': '25'
  }, {
    'WID': '58',
    'WName': '26',
    'NameVN': '26',
    'iNum': '26'
  }, {
    'WID': '59',
    'WName': '27',
    'NameVN': '27',
    'iNum': '27'
  }, {
    'WID': '60',
    'WName': '28',
    'NameVN': '28',
    'iNum': '28'
  }]
}, {
  'DID': '65',
  'DName': 'Can Gio',
  'NameVN': 'Cần Giờ',
  'listWard': [{
    'WID': '286',
    'WName': 'An Thoi Dong',
    'NameVN': 'An Thới Đông',
    'iNum': '2147483647'
  }, {
    'WID': '114',
    'WName': 'BINH KHANH',
    'NameVN': 'BÌNH KHÁNH',
    'iNum': '2147483647'
  }, {
    'WID': '287',
    'WName': 'Can Thanh',
    'NameVN': 'Cần Thạnh',
    'iNum': '2147483647'
  }, {
    'WID': '302',
    'WName': 'Long Hoa',
    'NameVN': 'Long Hòa',
    'iNum': '2147483647'
  }]
}, {
  'DID': '64',
  'DName': 'Cu Chi',
  'NameVN': 'Củ Chi',
  'listWard': [{
    'WID': '272',
    'WName': 'AN NHON TAY',
    'NameVN': 'AN NHƠN TÂY',
    'iNum': '2147483647'
  }, {
    'WID': '119',
    'WName': 'AN PHU',
    'NameVN': 'AN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '257',
    'WName': 'Binh My',
    'NameVN': 'Bình Mỹ',
    'iNum': '2147483647'
  }, {
    'WID': '268',
    'WName': 'CU CHI',
    'NameVN': 'CỦ CHI',
    'iNum': '2147483647'
  }, {
    'WID': '279',
    'WName': 'Hoa Phu',
    'NameVN': 'Hòa Phú',
    'iNum': '2147483647'
  }, {
    'WID': '271',
    'WName': 'NHUAN DUC',
    'NameVN': 'NHUẬN ĐỨC',
    'iNum': '2147483647'
  }, {
    'WID': '270',
    'WName': 'Pham Van Coi',
    'NameVN': 'Phạm Văn Cội',
    'iNum': '2147483647'
  }, {
    'WID': '269',
    'WName': 'Phu Hoa Dong',
    'NameVN': 'Phú Hòa Đông',
    'iNum': '2147483647'
  }, {
    'WID': '273',
    'WName': 'Phu My Hung',
    'NameVN': 'Phú Mỹ Hưng',
    'iNum': '2147483647'
  }, {
    'WID': '276',
    'WName': 'Phuoc Hiep',
    'NameVN': 'Phước Hiệp',
    'iNum': '2147483647'
  }, {
    'WID': '277',
    'WName': 'Phuoc Thanh',
    'NameVN': 'Phước Thạnh',
    'iNum': '2147483647'
  }, {
    'WID': '267',
    'WName': 'Phuoc Vinh An',
    'NameVN': 'Phước Vĩnh An',
    'iNum': '2147483647'
  }, {
    'WID': '260',
    'WName': 'Tan An Hoi',
    'NameVN': 'Tân An Hội',
    'iNum': '2147483647'
  }, {
    'WID': '258',
    'WName': 'TAN PHU TRUNG',
    'NameVN': 'TÂN PHÚ TRUNG',
    'iNum': '2147483647'
  }, {
    'WID': '261',
    'WName': 'Tan Thanh Dong',
    'NameVN': 'Tân Thạnh Đông',
    'iNum': '2147483647'
  }, {
    'WID': '265',
    'WName': 'Tan Thanh Tay',
    'NameVN': 'Tân Thạnh Tây',
    'iNum': '2147483647'
  }, {
    'WID': '259',
    'WName': 'TAN THONG HOI',
    'NameVN': 'TÂN THÔNG HỘI',
    'iNum': '2147483647'
  }, {
    'WID': '278',
    'WName': 'Thai My',
    'NameVN': 'Thái Mỹ',
    'iNum': '2147483647'
  }, {
    'WID': '266',
    'WName': 'Trung An',
    'NameVN': 'Trung An',
    'iNum': '2147483647'
  }, {
    'WID': '274',
    'WName': 'Trung Lap Ha',
    'NameVN': 'Trung Lập Hạ',
    'iNum': '2147483647'
  }, {
    'WID': '275',
    'WName': 'TRUNG LAP THUONG',
    'NameVN': 'TRUNG LẬP THƯỢNG',
    'iNum': '2147483647'
  }]
}, {
  'DID': '38',
  'DName': 'Go Vap',
  'NameVN': 'Gò Vấp',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }, {
    'WID': '26',
    'WName': '16',
    'NameVN': '16',
    'iNum': '16'
  }, {
    'WID': '27',
    'WName': '17',
    'NameVN': '17',
    'iNum': '17'
  }]
}, {
  'DID': '61',
  'DName': 'Hoc Mon',
  'NameVN': 'Hóc Môn',
  'listWard': [{
    'WID': '166',
    'WName': 'BA DIEM',
    'NameVN': 'BÀ ĐIỂM',
    'iNum': '2147483647'
  }, {
    'WID': '263',
    'WName': 'Dong Thanh',
    'NameVN': 'Đông Thạnh',
    'iNum': '2147483647'
  }, {
    'WID': '174',
    'WName': 'HIEP THANH',
    'NameVN': 'HIỆP THÀNH',
    'iNum': '2147483647'
  }, {
    'WID': '228',
    'WName': 'Hoc Mon',
    'NameVN': 'Hóc Môn',
    'iNum': '2147483647'
  }, {
    'WID': '264',
    'WName': 'Nhi Binh',
    'NameVN': 'Nhị Bình',
    'iNum': '2147483647'
  }, {
    'WID': '175',
    'WName': 'TAN CHANH HIEP',
    'NameVN': 'TÂN CHÁNH HIỆP',
    'iNum': '2147483647'
  }, {
    'WID': '262',
    'WName': 'Tan Hiep',
    'NameVN': 'Tân Hiệp',
    'iNum': '2147483647'
  }, {
    'WID': '137',
    'WName': 'Tan Thoi Nhat',
    'NameVN': 'Tân Thới Nhất',
    'iNum': '2147483647'
  }, {
    'WID': '222',
    'WName': 'Tan Thoi Nhi',
    'NameVN': 'Tân Thới Nhì',
    'iNum': '2147483647'
  }, {
    'WID': '226',
    'WName': 'TAN XUAN',
    'NameVN': 'TÂN XUÂN',
    'iNum': '2147483647'
  }, {
    'WID': '177',
    'WName': 'Thoi Tam Thon',
    'NameVN': 'Thới Tam Thôn',
    'iNum': '2147483647'
  }, {
    'WID': '167',
    'WName': 'Trung Chanh',
    'NameVN': 'Trung Chánh',
    'iNum': '2147483647'
  }, {
    'WID': '138',
    'WName': 'TRUNG MY TAY',
    'NameVN': 'TRUNG MỸ TÂY',
    'iNum': '2147483647'
  }, {
    'WID': '223',
    'WName': 'XUAN THOI DONG',
    'NameVN': 'XUÂN THỚI ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '220',
    'WName': 'XUAN THOI SON',
    'NameVN': 'XUÂN THỚI SƠN',
    'iNum': '2147483647'
  }, {
    'WID': '219',
    'WName': 'XUAN THOI THUONG',
    'NameVN': 'XUÂN THỚI THƯỢNG',
    'iNum': '2147483647'
  }]
}, {
  'DID': '63',
  'DName': 'Nha Be',
  'NameVN': 'Nhà Bè',
  'listWard': [{
    'WID': '299',
    'WName': 'Hiep Phuoc',
    'NameVN': 'Hiệp Phước',
    'iNum': '2147483647'
  }, {
    'WID': '194',
    'WName': 'Long Thoi',
    'NameVN': 'Long Thới',
    'iNum': '2147483647'
  }, {
    'WID': '298',
    'WName': 'Nha Be',
    'NameVN': 'Nhà Bè',
    'iNum': '2147483647'
  }, {
    'WID': '196',
    'WName': 'Nhon Duc',
    'NameVN': 'Nhơn Đức',
    'iNum': '2147483647'
  }, {
    'WID': '182',
    'WName': 'Phu Xuan',
    'NameVN': 'Phú Xuân',
    'iNum': '2147483647'
  }, {
    'WID': '193',
    'WName': 'Phuoc Kieng',
    'NameVN': 'Phước Kiểng',
    'iNum': '2147483647'
  }, {
    'WID': '280',
    'WName': 'Phuoc Loc',
    'NameVN': 'Phước Lộc',
    'iNum': '2147483647'
  }, {
    'WID': '35',
    'WName': 'TAN KIENG',
    'NameVN': 'TÂN KIỂNG',
    'iNum': '2147483647'
  }]
}, {
  'DID': '32',
  'DName': 'Phu Nhuan',
  'NameVN': 'Phú Nhuận',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }, {
    'WID': '27',
    'WName': '17',
    'NameVN': '17',
    'iNum': '17'
  }]
}, {
  'DID': '22',
  'DName': 'Tan Binh',
  'NameVN': 'Tân Bình',
  'listWard': [{
    'WID': '1',
    'WName': '1',
    'NameVN': '1',
    'iNum': '1'
  }, {
    'WID': '2',
    'WName': '2',
    'NameVN': '2',
    'iNum': '2'
  }, {
    'WID': '3',
    'WName': '3',
    'NameVN': '3',
    'iNum': '3'
  }, {
    'WID': '4',
    'WName': '4',
    'NameVN': '4',
    'iNum': '4'
  }, {
    'WID': '5',
    'WName': '5',
    'NameVN': '5',
    'iNum': '5'
  }, {
    'WID': '6',
    'WName': '6',
    'NameVN': '6',
    'iNum': '6'
  }, {
    'WID': '7',
    'WName': '7',
    'NameVN': '7',
    'iNum': '7'
  }, {
    'WID': '8',
    'WName': '8',
    'NameVN': '8',
    'iNum': '8'
  }, {
    'WID': '9',
    'WName': '9',
    'NameVN': '9',
    'iNum': '9'
  }, {
    'WID': '10',
    'WName': '10',
    'NameVN': '10',
    'iNum': '10'
  }, {
    'WID': '11',
    'WName': '11',
    'NameVN': '11',
    'iNum': '11'
  }, {
    'WID': '12',
    'WName': '12',
    'NameVN': '12',
    'iNum': '12'
  }, {
    'WID': '29',
    'WName': '13',
    'NameVN': '13',
    'iNum': '13'
  }, {
    'WID': '28',
    'WName': '14',
    'NameVN': '14',
    'iNum': '14'
  }, {
    'WID': '25',
    'WName': '15',
    'NameVN': '15',
    'iNum': '15'
  }]
}, {
  'DID': '40',
  'DName': 'Tan Phu',
  'NameVN': 'Tân Phú',
  'listWard': [{
    'WID': '99',
    'WName': 'BINH HUNG HOA',
    'NameVN': 'BÌNH HƯNG HÒA',
    'iNum': '2147483647'
  }, {
    'WID': '122',
    'WName': 'BINH HUNG HOA A',
    'NameVN': 'BÌNH HƯNG HÒA A',
    'iNum': '2147483647'
  }, {
    'WID': '64',
    'WName': 'BINH TRI DONG',
    'NameVN': 'BÌNH TRỊ ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '51',
    'WName': 'HIEP TAN',
    'NameVN': 'HIỆP TÂN',
    'iNum': '2147483647'
  }, {
    'WID': '63',
    'WName': 'HOA THANH',
    'NameVN': 'HÒA THẠNH',
    'iNum': '2147483647'
  }, {
    'WID': '50',
    'WName': 'PHU THANH',
    'NameVN': 'PHÚ THẠNH',
    'iNum': '2147483647'
  }, {
    'WID': '49',
    'WName': 'PHU THO HOA',
    'NameVN': 'PHÚ THỌ HÒA',
    'iNum': '2147483647'
  }, {
    'WID': '48',
    'WName': 'PHU TRUNG',
    'NameVN': 'PHÚ TRUNG',
    'iNum': '2147483647'
  }, {
    'WID': '44',
    'WName': 'SON KY',
    'NameVN': 'SƠN KỲ',
    'iNum': '2147483647'
  }, {
    'WID': '37',
    'WName': 'TAN PHU',
    'NameVN': 'TÂN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '41',
    'WName': 'TAN QUY',
    'NameVN': 'TÂN QUY',
    'iNum': '2147483647'
  }, {
    'WID': '247',
    'WName': 'Tan Quy',
    'NameVN': 'Tân Quý',
    'iNum': '2147483647'
  }, {
    'WID': '43',
    'WName': 'TAN SON NHI',
    'NameVN': 'TÂN SƠN NHÌ',
    'iNum': '2147483647'
  }, {
    'WID': '45',
    'WName': 'TAN THANH',
    'NameVN': 'TÂN THÀNH',
    'iNum': '2147483647'
  }, {
    'WID': '52',
    'WName': 'TAN THOI HOA',
    'NameVN': 'TÂN THỚI HÒA',
    'iNum': '2147483647'
  }, {
    'WID': '165',
    'WName': 'TAY THANH',
    'NameVN': 'TÂY THẠNH',
    'iNum': '2147483647'
  }]
}, {
  'DID': '45',
  'DName': 'Thu Duc',
  'NameVN': 'Thủ Đức',
  'listWard': [{
    'WID': '119',
    'WName': 'AN PHU',
    'NameVN': 'AN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '172',
    'WName': 'AN PHU DONG',
    'NameVN': 'AN PHÚ ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '140',
    'WName': 'BINH CHIEU',
    'NameVN': 'BÌNH CHIỂU',
    'iNum': '2147483647'
  }, {
    'WID': '160',
    'WName': 'BINH THO',
    'NameVN': 'BÌNH THỌ',
    'iNum': '2147483647'
  }, {
    'WID': '156',
    'WName': 'DI AN',
    'NameVN': 'DĨ AN',
    'iNum': '2147483647'
  }, {
    'WID': '129',
    'WName': 'HIEP BINH CHANH',
    'NameVN': 'HIỆP BÌNH CHÁNH',
    'iNum': '2147483647'
  }, {
    'WID': '141',
    'WName': 'HIEP BINH PHUOC',
    'NameVN': 'HIỆP BÌNH PHƯỚC',
    'iNum': '2147483647'
  }, {
    'WID': '132',
    'WName': 'LINH CHIEU',
    'NameVN': 'LINH CHIỂU',
    'iNum': '2147483647'
  }, {
    'WID': '130',
    'WName': 'LINH DONG',
    'NameVN': 'LINH ĐÔNG',
    'iNum': '2147483647'
  }, {
    'WID': '131',
    'WName': 'LINH TAY',
    'NameVN': 'LINH TÂY',
    'iNum': '2147483647'
  }, {
    'WID': '133',
    'WName': 'LINH TRUNG',
    'NameVN': 'LINH TRUNG',
    'iNum': '2147483647'
  }, {
    'WID': '134',
    'WName': 'LINH XUAN',
    'NameVN': 'LINH XUÂN',
    'iNum': '2147483647'
  }, {
    'WID': '143',
    'WName': 'PHUOC LONG A',
    'NameVN': 'PHƯỚC LONG A',
    'iNum': '2147483647'
  }, {
    'WID': '135',
    'WName': 'TAM BINH',
    'NameVN': 'TAM BÌNH',
    'iNum': '2147483647'
  }, {
    'WID': '136',
    'WName': 'TAM PHU',
    'NameVN': 'TAM PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '37',
    'WName': 'TAN PHU',
    'NameVN': 'TÂN PHÚ',
    'iNum': '2147483647'
  }, {
    'WID': '128',
    'WName': 'TRUONG THO',
    'NameVN': 'TRƯỜNG THỌ',
    'iNum': '2147483647'
  }]
}];
var oKey = {
  'ID': '8',
  'Name': 'Ho Chi Minh',
  'isward': '-1',
  'add': '7**Le Thi Hong Gam**Thai Binh**1**19**18',
  'lnk': '878506_2479886',
  'state': 'SaiGon',
  'dsCity': [{
    'cityID': '76',
    'cityEN': 'An Giang',
    'cityVN': 'An Giang',
    'state': 'AnGiang'
  }, {
    'cityID': '64',
    'cityEN': 'Ba Ria - Vung Tau',
    'cityVN': 'Bà Rịa Vũng Tàu',
    'state': 'VungTau'
  }, {
    'cityID': '204',
    'cityEN': 'Bac Giang',
    'cityVN': 'Bắc Giang',
    'state': 'BacGiang'
  }, {
    'cityID': '281',
    'cityEN': 'Bac Kan',
    'cityVN': 'Bắc Kạn',
    'state': 'BacKan'
  }, {
    'cityID': '781',
    'cityEN': 'Bac Lieu',
    'cityVN': 'Bạc Liêu',
    'state': 'BacLieu'
  }, {
    'cityID': '241',
    'cityEN': 'Bac Ninh',
    'cityVN': 'Bắc Ninh',
    'state': 'BacKan'
  }, {
    'cityID': '75',
    'cityEN': 'Ben Tre',
    'cityVN': 'Bến Tre',
    'state': 'BenTre'
  }, {
    'cityID': '56',
    'cityEN': 'Binh Dinh',
    'cityVN': 'Bình Định',
    'state': 'BinhDinh'
  }, {
    'cityID': '650',
    'cityEN': 'Binh Duong',
    'cityVN': 'Bình Dương',
    'state': 'BinhDuong'
  }, {
    'cityID': '651',
    'cityEN': 'Binh Phuoc',
    'cityVN': 'Bình Phước',
    'state': 'BinhPhuoc'
  }, {
    'cityID': '62',
    'cityEN': 'Binh Thuan',
    'cityVN': 'Bình Thuận',
    'state': 'PhanThiet'
  }, {
    'cityID': '780',
    'cityEN': 'Ca Mau',
    'cityVN': 'Cà Mau',
    'state': 'CaMau'
  }, {
    'cityID': '710',
    'cityEN': 'Can Tho',
    'cityVN': 'Cần Thơ',
    'state': 'CanTho'
  }, {
    'cityID': '26',
    'cityEN': 'Cao Bang',
    'cityVN': 'Cao Bằng',
    'state': 'CaoBang'
  }, {
    'cityID': '511',
    'cityEN': 'Da Nang',
    'cityVN': 'Đà Nẵng',
    'state': 'DaNang'
  }, {
    'cityID': '501',
    'cityEN': 'Dac Nong',
    'cityVN': 'Đắc Nông',
    'state': 'DacNong'
  }, {
    'cityID': '500',
    'cityEN': 'Dak  Lak',
    'cityVN': 'Đắk  Lắk',
    'state': 'BanMeThuot'
  }, {
    'cityID': '230',
    'cityEN': 'Dien Bien',
    'cityVN': 'Điện Biên',
    'state': 'DienBien'
  }, {
    'cityID': '61',
    'cityEN': 'Dong Nai',
    'cityVN': 'Đồng Nai',
    'state': 'DongNai'
  }, {
    'cityID': '67',
    'cityEN': 'Dong Thap',
    'cityVN': 'Đồng Tháp',
    'state': 'DongThap'
  }, {
    'cityID': '59',
    'cityEN': 'Gia Lai',
    'cityVN': 'Gia Lai',
    'state': 'GiaLai'
  }, {
    'cityID': '223',
    'cityEN': 'Ha Giang',
    'cityVN': 'Hà Giang',
    'state': 'HaGiang'
  }, {
    'cityID': '351',
    'cityEN': 'Ha Nam',
    'cityVN': 'Hà Nam',
    'state': 'HaNam'
  }, {
    'cityID': '4',
    'cityEN': 'Ha Noi',
    'cityVN': 'Hà Nội',
    'state': 'HaNoi'
  }, {
    'cityID': '39',
    'cityEN': 'Ha Tinh',
    'cityVN': 'Hà Tĩnh',
    'state': 'HaTinh'
  }, {
    'cityID': '320',
    'cityEN': 'Hai Duong',
    'cityVN': 'Hải Dương',
    'state': 'HaiDuong'
  }, {
    'cityID': '31',
    'cityEN': 'Hai Phong',
    'cityVN': 'Hải Phòng',
    'state': 'HaiPhong'
  }, {
    'cityID': '711',
    'cityEN': 'Hau Giang',
    'cityVN': 'Hậu Giang',
    'state': 'HauGiang'
  }, {
    'cityID': '8',
    'cityEN': 'Ho Chi Minh',
    'cityVN': 'Hồ Chí Minh',
    'state': 'SaiGon'
  }, {
    'cityID': '18',
    'cityEN': 'Hoa Binh',
    'cityVN': 'Hòa Bình',
    'state': 'HoaBinh'
  }, {
    'cityID': '321',
    'cityEN': 'Hung Yen',
    'cityVN': 'Hưng Yên',
    'state': 'HungYen'
  }, {
    'cityID': '58',
    'cityEN': 'Khanh Hoa',
    'cityVN': 'Khánh Hòa',
    'state': 'NhaTrang'
  }, {
    'cityID': '77',
    'cityEN': 'Kien Giang',
    'cityVN': 'Kiên Giang',
    'state': 'RachGia'
  }, {
    'cityID': '60',
    'cityEN': 'Kon Tum',
    'cityVN': 'Kon Tum',
    'state': 'KonTum'
  }, {
    'cityID': '23',
    'cityEN': 'Lai Chau',
    'cityVN': 'Lai Châu',
    'state': 'LaiChau'
  }, {
    'cityID': '63',
    'cityEN': 'Lam Dong',
    'cityVN': 'Lâm Đồng',
    'state': 'LamDong'
  }, {
    'cityID': '25',
    'cityEN': 'Lang Son',
    'cityVN': 'Lạng Sơn',
    'state': 'LangSon'
  }, {
    'cityID': '20',
    'cityEN': 'Lao Cai',
    'cityVN': 'Lào Cai',
    'state': 'LaoCai'
  }, {
    'cityID': '72',
    'cityEN': 'Long An',
    'cityVN': 'Long An',
    'state': 'LongAn'
  }, {
    'cityID': '350',
    'cityEN': 'Nam Dinh',
    'cityVN': 'Nam Định',
    'state': 'NamDinh'
  }, {
    'cityID': '38',
    'cityEN': 'Nghe An',
    'cityVN': 'Nghệ An',
    'state': 'NgheAn'
  }, {
    'cityID': '30',
    'cityEN': 'Ninh Binh',
    'cityVN': 'Ninh Bình',
    'state': 'NinhBinh'
  }, {
    'cityID': '68',
    'cityEN': 'Ninh Thuan',
    'cityVN': 'Ninh Thuận',
    'state': 'PhanRang'
  }, {
    'cityID': '210',
    'cityEN': 'Phu Tho',
    'cityVN': 'Phú Thọ',
    'state': 'PhuTho'
  }, {
    'cityID': '57',
    'cityEN': 'Phu Yen',
    'cityVN': 'Phú Yên',
    'state': 'PhuYen'
  }, {
    'cityID': '52',
    'cityEN': 'Quang Binh',
    'cityVN': 'Quảng Bình',
    'state': 'DongHoi'
  }, {
    'cityID': '510',
    'cityEN': 'Quang Nam',
    'cityVN': 'Quảng Nam',
    'state': 'QuangNam'
  }, {
    'cityID': '55',
    'cityEN': 'Quang Ngai',
    'cityVN': 'Quảng Ngãi',
    'state': 'QuangNgai'
  }, {
    'cityID': '33',
    'cityEN': 'Quang Ninh',
    'cityVN': 'Quảng Ninh',
    'state': 'QuangNinh'
  }, {
    'cityID': '53',
    'cityEN': 'Quang Tri',
    'cityVN': 'Quảng Trị',
    'state': 'QuangTri'
  }, {
    'cityID': '79',
    'cityEN': 'Soc Trang',
    'cityVN': 'Sóc Trang',
    'state': 'SocTrang'
  }, {
    'cityID': '66',
    'cityEN': 'Tay Ninh',
    'cityVN': 'Tây Ninh',
    'state': 'TayNinh'
  }, {
    'cityID': '36',
    'cityEN': 'Thai Binh',
    'cityVN': 'Thái Bình',
    'state': 'ThaiBinh'
  }, {
    'cityID': '280',
    'cityEN': 'Thai Nguyen',
    'cityVN': 'Thái Nguyên',
    'state': 'ThaiNguyen'
  }, {
    'cityID': '37',
    'cityEN': 'Thanh Hoa',
    'cityVN': 'Thanh Hóa',
    'state': 'ThanhHoa'
  }, {
    'cityID': '54',
    'cityEN': 'Thua Thien Hue',
    'cityVN': 'Thừa Thiên Huế',
    'state': 'Hue'
  }, {
    'cityID': '73',
    'cityEN': 'Tien Giang',
    'cityVN': 'Tiền Giang',
    'state': 'TienGiang'
  }, {
    'cityID': '74',
    'cityEN': 'Tra Vinh',
    'cityVN': 'Trà Vinh',
    'state': 'TraVinh'
  }, {
    'cityID': '27',
    'cityEN': 'Tuyen Quang',
    'cityVN': 'Tuyên Quang',
    'state': 'TuyenQuang'
  }, {
    'cityID': '70',
    'cityEN': 'Vinh Long',
    'cityVN': 'Vĩnh Long',
    'state': 'VinhLong'
  }, {
    'cityID': '211',
    'cityEN': 'Vinh Phuc',
    'cityVN': 'Vĩnh Phúc',
    'state': 'VinhPhuc'
  }, {
    'cityID': '29',
    'cityEN': 'Yen Bai',
    'cityVN': 'Yên Bái',
    'state': 'YenBai'
  }],
  'status': '1',
  'key': '5549585F52505E5Eexi3',
  'pic': 'http://images.diadiem.com/common/vietnam.jpg',
  'dw': [{
    'DID': '18',
    'DName': '1',
    'NameVN': '1',
    'listWard': [{
      'WID': '14',
      'WName': 'BEN NGHE',
      'NameVN': 'BẾN NGHÉ',
      'iNum': '2147483647'
    }, {
      'WID': '21',
      'WName': 'BEN THANH',
      'NameVN': 'BẾN THÀNH',
      'iNum': '2147483647'
    }, {
      'WID': '20',
      'WName': 'CAU KHO',
      'NameVN': 'CẦU KHO',
      'iNum': '2147483647'
    }, {
      'WID': '15',
      'WName': 'Cau Ong Lanh',
      'NameVN': 'Cầu Ông Lãnh',
      'iNum': '2147483647'
    }, {
      'WID': '24',
      'WName': 'CO GIANG',
      'NameVN': 'CÔ GIANG',
      'iNum': '2147483647'
    }, {
      'WID': '16',
      'WName': 'DA KAO',
      'NameVN': 'ĐA KAO',
      'iNum': '2147483647'
    }, {
      'WID': '18',
      'WName': 'NGUYEN CU TRINH',
      'NameVN': 'NGUYỄN CƯ TRINH',
      'iNum': '2147483647'
    }, {
      'WID': '19',
      'WName': 'NGUYEN THAI BINH',
      'NameVN': 'NGUYỄN THÁI BÌNH',
      'iNum': '2147483647'
    }, {
      'WID': '22',
      'WName': 'PHAM NGU LAO',
      'NameVN': 'PHẠM NGŨ LÃO',
      'iNum': '2147483647'
    }, {
      'WID': '17',
      'WName': 'Tan Dinh',
      'NameVN': 'Tân Định',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '42',
    'DName': '2',
    'NameVN': '2',
    'listWard': [{
      'WID': '117',
      'WName': 'AN KHANH',
      'NameVN': 'AN KHÁNH',
      'iNum': '2147483647'
    }, {
      'WID': '256',
      'WName': 'An Loi Dong',
      'NameVN': 'An Lợi Đông',
      'iNum': '2147483647'
    }, {
      'WID': '119',
      'WName': 'AN PHU',
      'NameVN': 'AN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '115',
      'WName': 'BINH AN',
      'NameVN': 'BÌNH AN',
      'iNum': '2147483647'
    }, {
      'WID': '114',
      'WName': 'BINH KHANH',
      'NameVN': 'BÌNH KHÁNH',
      'iNum': '2147483647'
    }, {
      'WID': '190',
      'WName': 'BINH TRUNG DONG',
      'NameVN': 'BÌNH TRƯNG ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '126',
      'WName': 'BINH TRUNG TAY',
      'NameVN': 'BÌNH TRƯNG TÂY',
      'iNum': '2147483647'
    }, {
      'WID': '121',
      'WName': 'CAT LAI',
      'NameVN': 'CÁT LÁI',
      'iNum': '2147483647'
    }, {
      'WID': '150',
      'WName': 'PHUOC LONG B',
      'NameVN': 'PHƯỚC LONG B',
      'iNum': '2147483647'
    }, {
      'WID': '169',
      'WName': 'THANH LOC',
      'NameVN': 'THẠNH LỘC',
      'iNum': '2147483647'
    }, {
      'WID': '123',
      'WName': 'THANH MY LOI',
      'NameVN': 'THẠNH MỸ LỢI',
      'iNum': '2147483647'
    }, {
      'WID': '113',
      'WName': 'THAO DIEN',
      'NameVN': 'THẢO ĐIỀN',
      'iNum': '2147483647'
    }, {
      'WID': '116',
      'WName': 'THU THIEM',
      'NameVN': 'THỦ THIÊM',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '17',
    'DName': '3',
    'NameVN': '3',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }]
  }, {
    'DID': '21',
    'DName': '4',
    'NameVN': '4',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }, {
      'WID': '26',
      'WName': '16',
      'NameVN': '16',
      'iNum': '16'
    }, {
      'WID': '30',
      'WName': '18',
      'NameVN': '18',
      'iNum': '18'
    }]
  }, {
    'DID': '20',
    'DName': '5',
    'NameVN': '5',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }]
  }, {
    'DID': '25',
    'DName': '6',
    'NameVN': '6',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }]
  }, {
    'DID': '41',
    'DName': '7',
    'NameVN': '7',
    'listWard': [{
      'WID': '39',
      'WName': 'BINH THUAN',
      'NameVN': 'BÌNH THUẬN',
      'iNum': '2147483647'
    }, {
      'WID': '40',
      'WName': 'PHU MY',
      'NameVN': 'PHÚ MỸ',
      'iNum': '2147483647'
    }, {
      'WID': '38',
      'WName': 'PHU THUAN',
      'NameVN': 'PHÚ THUẬN',
      'iNum': '2147483647'
    }, {
      'WID': '33',
      'WName': 'TAN HUNG',
      'NameVN': 'TÂN HƯNG',
      'iNum': '2147483647'
    }, {
      'WID': '35',
      'WName': 'TAN KIENG',
      'NameVN': 'TÂN KIỂNG',
      'iNum': '2147483647'
    }, {
      'WID': '42',
      'WName': 'TAN PHONG',
      'NameVN': 'TÂN PHONG',
      'iNum': '2147483647'
    }, {
      'WID': '37',
      'WName': 'TAN PHU',
      'NameVN': 'TÂN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '41',
      'WName': 'TAN QUY',
      'NameVN': 'TÂN QUY',
      'iNum': '2147483647'
    }, {
      'WID': '247',
      'WName': 'Tan Quy',
      'NameVN': 'Tân Quý',
      'iNum': '2147483647'
    }, {
      'WID': '36',
      'WName': 'TAN THUAN DONG',
      'NameVN': 'TÂN THUẬN ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '34',
      'WName': 'TAN THUAN TAY',
      'NameVN': 'TÂN THUẬN TÂY',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '37',
    'DName': '8',
    'NameVN': '8',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }, {
      'WID': '26',
      'WName': '16',
      'NameVN': '16',
      'iNum': '16'
    }]
  }, {
    'DID': '43',
    'DName': '9',
    'NameVN': '9',
    'listWard': [{
      'WID': '142',
      'WName': 'HIEP PHU',
      'NameVN': 'HIỆP PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '209',
      'WName': 'LONG BINH',
      'NameVN': 'LONG BÌNH',
      'iNum': '2147483647'
    }, {
      'WID': '145',
      'WName': 'LONG THANH MY',
      'NameVN': 'LONG THẠNH MỸ',
      'iNum': '2147483647'
    }, {
      'WID': '148',
      'WName': 'LONG TRUONG',
      'NameVN': 'LONG TRƯỜNG',
      'iNum': '2147483647'
    }, {
      'WID': '191',
      'WName': 'PHU HUU',
      'NameVN': 'PHÚ HỮU',
      'iNum': '2147483647'
    }, {
      'WID': '154',
      'WName': 'Phuoc Binh',
      'NameVN': 'Phước Bình',
      'iNum': '2147483647'
    }, {
      'WID': '143',
      'WName': 'PHUOC LONG A',
      'NameVN': 'PHƯỚC LONG A',
      'iNum': '2147483647'
    }, {
      'WID': '150',
      'WName': 'PHUOC LONG B',
      'NameVN': 'PHƯỚC LONG B',
      'iNum': '2147483647'
    }, {
      'WID': '37',
      'WName': 'TAN PHU',
      'NameVN': 'TÂN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '144',
      'WName': 'TANG NHON PHU A',
      'NameVN': 'TĂNG NHƠN PHÚ A',
      'iNum': '2147483647'
    }, {
      'WID': '149',
      'WName': 'TANG NHON PHU B',
      'NameVN': 'TĂNG NHƠN PHÚ B',
      'iNum': '2147483647'
    }, {
      'WID': '146',
      'WName': 'TRUONG THANH',
      'NameVN': 'TRƯỜNG THẠNH',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '19',
    'DName': '10',
    'NameVN': '10',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }]
  }, {
    'DID': '24',
    'DName': '11',
    'NameVN': '11',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }, {
      'WID': '26',
      'WName': '16',
      'NameVN': '16',
      'iNum': '16'
    }]
  }, {
    'DID': '44',
    'DName': '12',
    'NameVN': '12',
    'listWard': [{
      'WID': '172',
      'WName': 'AN PHU DONG',
      'NameVN': 'AN PHÚ ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '166',
      'WName': 'BA DIEM',
      'NameVN': 'BÀ ĐIỂM',
      'iNum': '2147483647'
    }, {
      'WID': '120',
      'WName': 'DONG HUNG THUAN',
      'NameVN': 'ĐÔNG HƯNG THUẬN',
      'iNum': '2147483647'
    }, {
      'WID': '174',
      'WName': 'HIEP THANH',
      'NameVN': 'HIỆP THÀNH',
      'iNum': '2147483647'
    }, {
      'WID': '175',
      'WName': 'TAN CHANH HIEP',
      'NameVN': 'TÂN CHÁNH HIỆP',
      'iNum': '2147483647'
    }, {
      'WID': '281',
      'WName': 'TAN HUNG THUAN',
      'NameVN': 'TÂN HƯNG THUẬN',
      'iNum': '2147483647'
    }, {
      'WID': '171',
      'WName': 'TAN THOI HIEP',
      'NameVN': 'TÂN THỚI HIỆP',
      'iNum': '2147483647'
    }, {
      'WID': '137',
      'WName': 'Tan Thoi Nhat',
      'NameVN': 'Tân Thới Nhất',
      'iNum': '2147483647'
    }, {
      'WID': '169',
      'WName': 'THANH LOC',
      'NameVN': 'THẠNH LỘC',
      'iNum': '2147483647'
    }, {
      'WID': '168',
      'WName': 'THANH XUAN',
      'NameVN': 'THẠNH XUÂN',
      'iNum': '2147483647'
    }, {
      'WID': '170',
      'WName': 'THOI AN',
      'NameVN': 'THỚI AN',
      'iNum': '2147483647'
    }, {
      'WID': '167',
      'WName': 'Trung Chanh',
      'NameVN': 'Trung Chánh',
      'iNum': '2147483647'
    }, {
      'WID': '138',
      'WName': 'TRUNG MY TAY',
      'NameVN': 'TRUNG MỸ TÂY',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '36',
    'DName': 'Binh Chanh',
    'NameVN': 'Bình Chánh',
    'listWard': [{
      'WID': '186',
      'WName': 'AN PHU TAY',
      'NameVN': 'AN PHÚ TÂY',
      'iNum': '2147483647'
    }, {
      'WID': '212',
      'WName': 'Binh Chanh',
      'NameVN': 'Bình Chánh',
      'iNum': '2147483647'
    }, {
      'WID': '94',
      'WName': 'Binh Hung',
      'NameVN': 'Bình Hưng',
      'iNum': '2147483647'
    }, {
      'WID': '255',
      'WName': 'Hung Long',
      'NameVN': 'Hưng Long',
      'iNum': '2147483647'
    }, {
      'WID': '250',
      'WName': 'Le Minh Xuan',
      'NameVN': 'Lê Minh Xuân',
      'iNum': '2147483647'
    }, {
      'WID': '251',
      'WName': 'PHAM VAN HAI',
      'NameVN': 'PHẠM VĂN HAI',
      'iNum': '2147483647'
    }, {
      'WID': '300',
      'WName': 'Phong Phu',
      'NameVN': 'Phong Phú',
      'iNum': '2147483647'
    }, {
      'WID': '254',
      'WName': 'Quy Duc',
      'NameVN': 'Quy Đức',
      'iNum': '2147483647'
    }, {
      'WID': '187',
      'WName': 'TAN KIEN',
      'NameVN': 'TÂN KIÊN',
      'iNum': '2147483647'
    }, {
      'WID': '252',
      'WName': 'Tan Nhut',
      'NameVN': 'Tân Nhựt',
      'iNum': '2147483647'
    }, {
      'WID': '189',
      'WName': 'TAN QUY TAY',
      'NameVN': 'TÂN QUÝ TÂY',
      'iNum': '2147483647'
    }, {
      'WID': '188',
      'WName': 'Tan Tuc',
      'NameVN': 'Tân Túc',
      'iNum': '2147483647'
    }, {
      'WID': '218',
      'WName': 'VINH LOC A',
      'NameVN': 'VĨNH LỘC A',
      'iNum': '2147483647'
    }, {
      'WID': '217',
      'WName': 'VINH LOC B',
      'NameVN': 'VĨNH LỘC B',
      'iNum': '2147483647'
    }, {
      'WID': '219',
      'WName': 'XUAN THOI THUONG',
      'NameVN': 'XUÂN THỚI THƯỢNG',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '39',
    'DName': 'Binh Tan',
    'NameVN': 'Bình Tân',
    'listWard': [{
      'WID': '96',
      'WName': 'AN LAC',
      'NameVN': 'AN LẠC',
      'iNum': '2147483647'
    }, {
      'WID': '65',
      'WName': 'AN LAC A',
      'NameVN': 'AN LẠC A',
      'iNum': '2147483647'
    }, {
      'WID': '99',
      'WName': 'BINH HUNG HOA',
      'NameVN': 'BÌNH HƯNG HÒA',
      'iNum': '2147483647'
    }, {
      'WID': '122',
      'WName': 'BINH HUNG HOA A',
      'NameVN': 'BÌNH HƯNG HÒA A',
      'iNum': '2147483647'
    }, {
      'WID': '178',
      'WName': 'BINH HUNG HOA B',
      'NameVN': 'BÌNH HƯNG HÒA B',
      'iNum': '2147483647'
    }, {
      'WID': '64',
      'WName': 'BINH TRI DONG',
      'NameVN': 'BÌNH TRỊ ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '152',
      'WName': 'BINH TRI DONG A',
      'NameVN': 'BÌNH TRỊ ĐÔNG A',
      'iNum': '2147483647'
    }, {
      'WID': '125',
      'WName': 'BINH TRI DONG B',
      'NameVN': 'BÌNH TRỊ ĐÔNG B',
      'iNum': '2147483647'
    }, {
      'WID': '250',
      'WName': 'Le Minh Xuan',
      'NameVN': 'Lê Minh Xuân',
      'iNum': '2147483647'
    }, {
      'WID': '49',
      'WName': 'PHU THO HOA',
      'NameVN': 'PHÚ THỌ HÒA',
      'iNum': '2147483647'
    }, {
      'WID': '187',
      'WName': 'TAN KIEN',
      'NameVN': 'TÂN KIÊN',
      'iNum': '2147483647'
    }, {
      'WID': '153',
      'WName': 'TAN TAO',
      'NameVN': 'TÂN TẠO',
      'iNum': '2147483647'
    }, {
      'WID': '124',
      'WName': 'TAN TAO A',
      'NameVN': 'TÂN TẠO A',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '31',
    'DName': 'Binh Thanh',
    'NameVN': 'Bình Thạnh',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }, {
      'WID': '27',
      'WName': '17',
      'NameVN': '17',
      'iNum': '17'
    }, {
      'WID': '31',
      'WName': '19',
      'NameVN': '19',
      'iNum': '19'
    }, {
      'WID': '53',
      'WName': '21',
      'NameVN': '21',
      'iNum': '21'
    }, {
      'WID': '54',
      'WName': '22',
      'NameVN': '22',
      'iNum': '22'
    }, {
      'WID': '56',
      'WName': '24',
      'NameVN': '24',
      'iNum': '24'
    }, {
      'WID': '57',
      'WName': '25',
      'NameVN': '25',
      'iNum': '25'
    }, {
      'WID': '58',
      'WName': '26',
      'NameVN': '26',
      'iNum': '26'
    }, {
      'WID': '59',
      'WName': '27',
      'NameVN': '27',
      'iNum': '27'
    }, {
      'WID': '60',
      'WName': '28',
      'NameVN': '28',
      'iNum': '28'
    }]
  }, {
    'DID': '65',
    'DName': 'Can Gio',
    'NameVN': 'Cần Giờ',
    'listWard': [{
      'WID': '286',
      'WName': 'An Thoi Dong',
      'NameVN': 'An Thới Đông',
      'iNum': '2147483647'
    }, {
      'WID': '114',
      'WName': 'BINH KHANH',
      'NameVN': 'BÌNH KHÁNH',
      'iNum': '2147483647'
    }, {
      'WID': '287',
      'WName': 'Can Thanh',
      'NameVN': 'Cần Thạnh',
      'iNum': '2147483647'
    }, {
      'WID': '302',
      'WName': 'Long Hoa',
      'NameVN': 'Long Hòa',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '64',
    'DName': 'Cu Chi',
    'NameVN': 'Củ Chi',
    'listWard': [{
      'WID': '272',
      'WName': 'AN NHON TAY',
      'NameVN': 'AN NHƠN TÂY',
      'iNum': '2147483647'
    }, {
      'WID': '119',
      'WName': 'AN PHU',
      'NameVN': 'AN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '257',
      'WName': 'Binh My',
      'NameVN': 'Bình Mỹ',
      'iNum': '2147483647'
    }, {
      'WID': '268',
      'WName': 'CU CHI',
      'NameVN': 'CỦ CHI',
      'iNum': '2147483647'
    }, {
      'WID': '279',
      'WName': 'Hoa Phu',
      'NameVN': 'Hòa Phú',
      'iNum': '2147483647'
    }, {
      'WID': '271',
      'WName': 'NHUAN DUC',
      'NameVN': 'NHUẬN ĐỨC',
      'iNum': '2147483647'
    }, {
      'WID': '270',
      'WName': 'Pham Van Coi',
      'NameVN': 'Phạm Văn Cội',
      'iNum': '2147483647'
    }, {
      'WID': '269',
      'WName': 'Phu Hoa Dong',
      'NameVN': 'Phú Hòa Đông',
      'iNum': '2147483647'
    }, {
      'WID': '273',
      'WName': 'Phu My Hung',
      'NameVN': 'Phú Mỹ Hưng',
      'iNum': '2147483647'
    }, {
      'WID': '276',
      'WName': 'Phuoc Hiep',
      'NameVN': 'Phước Hiệp',
      'iNum': '2147483647'
    }, {
      'WID': '277',
      'WName': 'Phuoc Thanh',
      'NameVN': 'Phước Thạnh',
      'iNum': '2147483647'
    }, {
      'WID': '267',
      'WName': 'Phuoc Vinh An',
      'NameVN': 'Phước Vĩnh An',
      'iNum': '2147483647'
    }, {
      'WID': '260',
      'WName': 'Tan An Hoi',
      'NameVN': 'Tân An Hội',
      'iNum': '2147483647'
    }, {
      'WID': '258',
      'WName': 'TAN PHU TRUNG',
      'NameVN': 'TÂN PHÚ TRUNG',
      'iNum': '2147483647'
    }, {
      'WID': '261',
      'WName': 'Tan Thanh Dong',
      'NameVN': 'Tân Thạnh Đông',
      'iNum': '2147483647'
    }, {
      'WID': '265',
      'WName': 'Tan Thanh Tay',
      'NameVN': 'Tân Thạnh Tây',
      'iNum': '2147483647'
    }, {
      'WID': '259',
      'WName': 'TAN THONG HOI',
      'NameVN': 'TÂN THÔNG HỘI',
      'iNum': '2147483647'
    }, {
      'WID': '278',
      'WName': 'Thai My',
      'NameVN': 'Thái Mỹ',
      'iNum': '2147483647'
    }, {
      'WID': '266',
      'WName': 'Trung An',
      'NameVN': 'Trung An',
      'iNum': '2147483647'
    }, {
      'WID': '274',
      'WName': 'Trung Lap Ha',
      'NameVN': 'Trung Lập Hạ',
      'iNum': '2147483647'
    }, {
      'WID': '275',
      'WName': 'TRUNG LAP THUONG',
      'NameVN': 'TRUNG LẬP THƯỢNG',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '38',
    'DName': 'Go Vap',
    'NameVN': 'Gò Vấp',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }, {
      'WID': '26',
      'WName': '16',
      'NameVN': '16',
      'iNum': '16'
    }, {
      'WID': '27',
      'WName': '17',
      'NameVN': '17',
      'iNum': '17'
    }]
  }, {
    'DID': '61',
    'DName': 'Hoc Mon',
    'NameVN': 'Hóc Môn',
    'listWard': [{
      'WID': '166',
      'WName': 'BA DIEM',
      'NameVN': 'BÀ ĐIỂM',
      'iNum': '2147483647'
    }, {
      'WID': '263',
      'WName': 'Dong Thanh',
      'NameVN': 'Đông Thạnh',
      'iNum': '2147483647'
    }, {
      'WID': '174',
      'WName': 'HIEP THANH',
      'NameVN': 'HIỆP THÀNH',
      'iNum': '2147483647'
    }, {
      'WID': '228',
      'WName': 'Hoc Mon',
      'NameVN': 'Hóc Môn',
      'iNum': '2147483647'
    }, {
      'WID': '264',
      'WName': 'Nhi Binh',
      'NameVN': 'Nhị Bình',
      'iNum': '2147483647'
    }, {
      'WID': '175',
      'WName': 'TAN CHANH HIEP',
      'NameVN': 'TÂN CHÁNH HIỆP',
      'iNum': '2147483647'
    }, {
      'WID': '262',
      'WName': 'Tan Hiep',
      'NameVN': 'Tân Hiệp',
      'iNum': '2147483647'
    }, {
      'WID': '137',
      'WName': 'Tan Thoi Nhat',
      'NameVN': 'Tân Thới Nhất',
      'iNum': '2147483647'
    }, {
      'WID': '222',
      'WName': 'Tan Thoi Nhi',
      'NameVN': 'Tân Thới Nhì',
      'iNum': '2147483647'
    }, {
      'WID': '226',
      'WName': 'TAN XUAN',
      'NameVN': 'TÂN XUÂN',
      'iNum': '2147483647'
    }, {
      'WID': '177',
      'WName': 'Thoi Tam Thon',
      'NameVN': 'Thới Tam Thôn',
      'iNum': '2147483647'
    }, {
      'WID': '167',
      'WName': 'Trung Chanh',
      'NameVN': 'Trung Chánh',
      'iNum': '2147483647'
    }, {
      'WID': '138',
      'WName': 'TRUNG MY TAY',
      'NameVN': 'TRUNG MỸ TÂY',
      'iNum': '2147483647'
    }, {
      'WID': '223',
      'WName': 'XUAN THOI DONG',
      'NameVN': 'XUÂN THỚI ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '220',
      'WName': 'XUAN THOI SON',
      'NameVN': 'XUÂN THỚI SƠN',
      'iNum': '2147483647'
    }, {
      'WID': '219',
      'WName': 'XUAN THOI THUONG',
      'NameVN': 'XUÂN THỚI THƯỢNG',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '63',
    'DName': 'Nha Be',
    'NameVN': 'Nhà Bè',
    'listWard': [{
      'WID': '299',
      'WName': 'Hiep Phuoc',
      'NameVN': 'Hiệp Phước',
      'iNum': '2147483647'
    }, {
      'WID': '194',
      'WName': 'Long Thoi',
      'NameVN': 'Long Thới',
      'iNum': '2147483647'
    }, {
      'WID': '298',
      'WName': 'Nha Be',
      'NameVN': 'Nhà Bè',
      'iNum': '2147483647'
    }, {
      'WID': '196',
      'WName': 'Nhon Duc',
      'NameVN': 'Nhơn Đức',
      'iNum': '2147483647'
    }, {
      'WID': '182',
      'WName': 'Phu Xuan',
      'NameVN': 'Phú Xuân',
      'iNum': '2147483647'
    }, {
      'WID': '193',
      'WName': 'Phuoc Kieng',
      'NameVN': 'Phước Kiểng',
      'iNum': '2147483647'
    }, {
      'WID': '280',
      'WName': 'Phuoc Loc',
      'NameVN': 'Phước Lộc',
      'iNum': '2147483647'
    }, {
      'WID': '35',
      'WName': 'TAN KIENG',
      'NameVN': 'TÂN KIỂNG',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '32',
    'DName': 'Phu Nhuan',
    'NameVN': 'Phú Nhuận',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }, {
      'WID': '27',
      'WName': '17',
      'NameVN': '17',
      'iNum': '17'
    }]
  }, {
    'DID': '22',
    'DName': 'Tan Binh',
    'NameVN': 'Tân Bình',
    'listWard': [{
      'WID': '1',
      'WName': '1',
      'NameVN': '1',
      'iNum': '1'
    }, {
      'WID': '2',
      'WName': '2',
      'NameVN': '2',
      'iNum': '2'
    }, {
      'WID': '3',
      'WName': '3',
      'NameVN': '3',
      'iNum': '3'
    }, {
      'WID': '4',
      'WName': '4',
      'NameVN': '4',
      'iNum': '4'
    }, {
      'WID': '5',
      'WName': '5',
      'NameVN': '5',
      'iNum': '5'
    }, {
      'WID': '6',
      'WName': '6',
      'NameVN': '6',
      'iNum': '6'
    }, {
      'WID': '7',
      'WName': '7',
      'NameVN': '7',
      'iNum': '7'
    }, {
      'WID': '8',
      'WName': '8',
      'NameVN': '8',
      'iNum': '8'
    }, {
      'WID': '9',
      'WName': '9',
      'NameVN': '9',
      'iNum': '9'
    }, {
      'WID': '10',
      'WName': '10',
      'NameVN': '10',
      'iNum': '10'
    }, {
      'WID': '11',
      'WName': '11',
      'NameVN': '11',
      'iNum': '11'
    }, {
      'WID': '12',
      'WName': '12',
      'NameVN': '12',
      'iNum': '12'
    }, {
      'WID': '29',
      'WName': '13',
      'NameVN': '13',
      'iNum': '13'
    }, {
      'WID': '28',
      'WName': '14',
      'NameVN': '14',
      'iNum': '14'
    }, {
      'WID': '25',
      'WName': '15',
      'NameVN': '15',
      'iNum': '15'
    }]
  }, {
    'DID': '40',
    'DName': 'Tan Phu',
    'NameVN': 'Tân Phú',
    'listWard': [{
      'WID': '99',
      'WName': 'BINH HUNG HOA',
      'NameVN': 'BÌNH HƯNG HÒA',
      'iNum': '2147483647'
    }, {
      'WID': '122',
      'WName': 'BINH HUNG HOA A',
      'NameVN': 'BÌNH HƯNG HÒA A',
      'iNum': '2147483647'
    }, {
      'WID': '64',
      'WName': 'BINH TRI DONG',
      'NameVN': 'BÌNH TRỊ ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '51',
      'WName': 'HIEP TAN',
      'NameVN': 'HIỆP TÂN',
      'iNum': '2147483647'
    }, {
      'WID': '63',
      'WName': 'HOA THANH',
      'NameVN': 'HÒA THẠNH',
      'iNum': '2147483647'
    }, {
      'WID': '50',
      'WName': 'PHU THANH',
      'NameVN': 'PHÚ THẠNH',
      'iNum': '2147483647'
    }, {
      'WID': '49',
      'WName': 'PHU THO HOA',
      'NameVN': 'PHÚ THỌ HÒA',
      'iNum': '2147483647'
    }, {
      'WID': '48',
      'WName': 'PHU TRUNG',
      'NameVN': 'PHÚ TRUNG',
      'iNum': '2147483647'
    }, {
      'WID': '44',
      'WName': 'SON KY',
      'NameVN': 'SƠN KỲ',
      'iNum': '2147483647'
    }, {
      'WID': '37',
      'WName': 'TAN PHU',
      'NameVN': 'TÂN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '41',
      'WName': 'TAN QUY',
      'NameVN': 'TÂN QUY',
      'iNum': '2147483647'
    }, {
      'WID': '247',
      'WName': 'Tan Quy',
      'NameVN': 'Tân Quý',
      'iNum': '2147483647'
    }, {
      'WID': '43',
      'WName': 'TAN SON NHI',
      'NameVN': 'TÂN SƠN NHÌ',
      'iNum': '2147483647'
    }, {
      'WID': '45',
      'WName': 'TAN THANH',
      'NameVN': 'TÂN THÀNH',
      'iNum': '2147483647'
    }, {
      'WID': '52',
      'WName': 'TAN THOI HOA',
      'NameVN': 'TÂN THỚI HÒA',
      'iNum': '2147483647'
    }, {
      'WID': '165',
      'WName': 'TAY THANH',
      'NameVN': 'TÂY THẠNH',
      'iNum': '2147483647'
    }]
  }, {
    'DID': '45',
    'DName': 'Thu Duc',
    'NameVN': 'Thủ Đức',
    'listWard': [{
      'WID': '119',
      'WName': 'AN PHU',
      'NameVN': 'AN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '172',
      'WName': 'AN PHU DONG',
      'NameVN': 'AN PHÚ ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '140',
      'WName': 'BINH CHIEU',
      'NameVN': 'BÌNH CHIỂU',
      'iNum': '2147483647'
    }, {
      'WID': '160',
      'WName': 'BINH THO',
      'NameVN': 'BÌNH THỌ',
      'iNum': '2147483647'
    }, {
      'WID': '156',
      'WName': 'DI AN',
      'NameVN': 'DĨ AN',
      'iNum': '2147483647'
    }, {
      'WID': '129',
      'WName': 'HIEP BINH CHANH',
      'NameVN': 'HIỆP BÌNH CHÁNH',
      'iNum': '2147483647'
    }, {
      'WID': '141',
      'WName': 'HIEP BINH PHUOC',
      'NameVN': 'HIỆP BÌNH PHƯỚC',
      'iNum': '2147483647'
    }, {
      'WID': '132',
      'WName': 'LINH CHIEU',
      'NameVN': 'LINH CHIỂU',
      'iNum': '2147483647'
    }, {
      'WID': '130',
      'WName': 'LINH DONG',
      'NameVN': 'LINH ĐÔNG',
      'iNum': '2147483647'
    }, {
      'WID': '131',
      'WName': 'LINH TAY',
      'NameVN': 'LINH TÂY',
      'iNum': '2147483647'
    }, {
      'WID': '133',
      'WName': 'LINH TRUNG',
      'NameVN': 'LINH TRUNG',
      'iNum': '2147483647'
    }, {
      'WID': '134',
      'WName': 'LINH XUAN',
      'NameVN': 'LINH XUÂN',
      'iNum': '2147483647'
    }, {
      'WID': '143',
      'WName': 'PHUOC LONG A',
      'NameVN': 'PHƯỚC LONG A',
      'iNum': '2147483647'
    }, {
      'WID': '135',
      'WName': 'TAM BINH',
      'NameVN': 'TAM BÌNH',
      'iNum': '2147483647'
    }, {
      'WID': '136',
      'WName': 'TAM PHU',
      'NameVN': 'TAM PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '37',
      'WName': 'TAN PHU',
      'NameVN': 'TÂN PHÚ',
      'iNum': '2147483647'
    }, {
      'WID': '128',
      'WName': 'TRUONG THO',
      'NameVN': 'TRƯỜNG THỌ',
      'iNum': '2147483647'
    }]
  }],
  'type': 'Q'
};
var aProduct = '';
var aTypeCard = [{
  'TID': '37',
  'TNEng': 'Beer and Wine Shops',
  'TN': 'Bán rượu bia'
}, {
  'TID': '36',
  'TNEng': 'Fast Food Restaurants',
  'TN': 'Bán thức ăn nhanh** coffee'
}, {
  'TID': '44',
  'TNEng': 'Car and Truck Dealer -Sales** Service** Repairs** Parts** Leasing',
  'TN': 'Bán** sữa chữa bảo trì xe ôtô'
}, {
  'TID': '47',
  'TNEng': 'Bars** Taverns** Nightclubs**  Discotheques',
  'TN': 'Bar** CLB đêm'
}, {
  'TID': '1',
  'TNEng': 'Hospitals',
  'TN': 'Bệnh viện'
}, {
  'TID': '9',
  'TNEng': 'Advanced cash locations (not atm machine)',
  'TN': 'Các điểm ứng tiền mặt (không phải máy ATM)'
}, {
  'TID': '41',
  'TNEng': 'Utilities - Electric** Gas** Water** and Sanitary',
  'TN': 'Các tiện ích - Điện** nước** ga** vệ sinh'
}, {
  'TID': '25',
  'TNEng': 'Universitys** Colleges',
  'TN': 'Các trường Đại học** Cao đẳng**…'
}, {
  'TID': '54',
  'TNEng': 'Athletic Fields** Professional Sports Clubs',
  'TN': 'Câu lạc bộ thể thao'
}, {
  'TID': '42',
  'TNEng': 'Automobile Rental Agency ',
  'TN': 'Cho thuê ô tô'
}, {
  'TID': '61',
  'TNEng': 'Automobile Rental Agency ',
  'TN': 'Cho thuê xe ô tô'
}, {
  'TID': '56',
  'TNEng': 'Isurance Sales** Underwriting** and Premiums',
  'TN': 'Công ty bảo hiểm'
}, {
  'TID': '45',
  'TNEng': 'Womens Accessory and Specialty Shops',
  'TN': 'Cửa hàng bán phụ kiện dành cho nữ'
}, {
  'TID': '22',
  'TNEng': 'Motobike store',
  'TN': 'Cửa hàng bán xe gắn máy'
}, {
  'TID': '46',
  'TNEng': 'Record Shops',
  'TN': 'Cửa hàng băng đĩa '
}, {
  'TID': '16',
  'TNEng': 'Beauty hair store',
  'TN': 'Cửa hàng cắt tóc thẩm mỹ'
}, {
  'TID': '21',
  'TNEng': 'Leather and luggage store',
  'TN': 'Cửa hàng da thuộc và hành lý'
}, {
  'TID': '20',
  'TNEng': 'Telephone and telecom device store',
  'TN': 'Cửa hàng điện thoại và các thiết bị viễn thông'
}, {
  'TID': '49',
  'TNEng': 'Antique Shops-Sales** Repairs** and Restoration Services',
  'TN': 'Cửa hàng đồ cổ: bán** sữa chữa** phục hồi'
}, {
  'TID': '8',
  'TNEng': 'Electronic** computer** graphic design device store',
  'TN': 'Cửa hàng đồ dùng điện tử** vi tính và thiết kế đồ họa'
}, {
  'TID': '7',
  'TNEng': 'Shoes Store',
  'TN': 'Cửa hàng giày dép'
}, {
  'TID': '50',
  'TNEng': 'Florists ',
  'TN': 'Cửa hàng hoa tươi'
}, {
  'TID': '15',
  'TNEng': 'Glasses Store',
  'TN': 'Cửa hàng mắt kính'
}, {
  'TID': '10',
  'TNEng': 'Camera and camera device store',
  'TN': 'Cửa hàng máy ảnh và dụng cụ hỗ trợ ngành ảnh'
}, {
  'TID': '14',
  'TNEng': 'Cosmetic Store',
  'TN': 'Cửa hàng mỹ phẩm'
}, {
  'TID': '2',
  'TNEng': 'Souvenir Store',
  'TN': 'Cửa hàng quà lưu niệm'
}, {
  'TID': '19',
  'TNEng': 'Sportswear shop',
  'TN': 'Cửa hàng quần áo thể thao'
}, {
  'TID': '59',
  'TNEng': 'Miscellaneous Apparel and Accessory Stores',
  'TN': 'Cửa hàng thời trang** hiệu vải'
}, {
  'TID': '23',
  'TNEng': 'Handy store',
  'TN': 'Cửa hàng tiện lợi'
}, {
  'TID': '24',
  'TNEng': 'Gold** silver**  precious stones** watch** wear store',
  'TN': 'Cửa hàng vàng** bạc** đá quý** đồng hồ** trang sức'
}, {
  'TID': '4',
  'TNEng': 'Family devices store',
  'TN': 'Cửa hàng vật dụng gia đình'
}, {
  'TID': '17',
  'TNEng': 'Tourist agency',
  'TN': 'Đại lý du lịch'
}, {
  'TID': '13',
  'TNEng': 'Stake** gamble** electronics game',
  'TN': 'Dịch vụ giải trí'
}, {
  'TID': '52',
  'TNEng': 'Real Estate Agents and Managers- Rentals',
  'TN': 'Dịch vụ giao dịch bất động sản(phí quản lý** hoa hồng**thuê)'
}, {
  'TID': '57',
  'TNEng': 'Advertising and Services',
  'TN': 'Dịch vụ quảng cáo'
}, {
  'TID': '53',
  'TNEng': 'Management Consulting and Public Relations Services',
  'TN': 'Dịch vụ tư vấn'
}, {
  'TID': '35',
  'TNEng': 'Transportation Services - Not Elsewhere Classified',
  'TN': 'Dịch vụ vận tải'
}, {
  'TID': '40',
  'TNEng': 'Hobby** Toy** and Games Shops',
  'TN': 'Đồ chơi** trò chơi giải trí'
}, {
  'TID': '6',
  'TNEng': 'Handicraft art production',
  'TN': 'Hàng thủ công mỹ nghệ'
}, {
  'TID': '18',
  'TNEng': 'Hotel** pleasure house** holiday resort',
  'TN': 'Khách sạn** nhà trọ** khu nghỉ mát'
}, {
  'TID': '51',
  'TNEng': 'Security Brokers and Dealers',
  'TN': 'Môi giới chứng khoán'
}, {
  'TID': '38',
  'TNEng': 'Commercial Art** Graphics** Photography',
  'TN': 'Nghệ thuật** Đồ họa** Nhiếp ảnh'
}, {
  'TID': '5',
  'TNEng': 'Restaurants',
  'TN': 'Nhà hàng ăn uống'
}, {
  'TID': '26',
  'TNEng': 'Dentistry',
  'TN': 'Nha khoa'
}, {
  'TID': '33',
  'TNEng': 'Tailor and Seamstresses** Mending and Alterations',
  'TN': 'Nhà may'
}, {
  'TID': '3',
  'TNEng': 'Book Store',
  'TN': 'Nhà sách'
}, {
  'TID': '11',
  'TNEng': 'Golf-court',
  'TN': 'Sân golf'
}, {
  'TID': '12',
  'TNEng': 'SuperMarket',
  'TN': 'Siêu thị'
}, {
  'TID': '39',
  'TNEng': 'Dance Halls** Studios** and Schools',
  'TN': 'Studio** Trường dạy khiêu vũ'
}, {
  'TID': '60',
  'TNEng': 'Childrens and Infants Wear Stores',
  'TN': 'Thời trang trẻ em và trẻ sơ sinh'
}, {
  'TID': '43',
  'TNEng': 'Bakery goods** wedding cakes',
  'TN': 'Tiệm bánh ngọt'
}, {
  'TID': '55',
  'TNEng': 'Video Amusement Game Supplies',
  'TN': 'Tiệm game** trò chơi điện tử'
}, {
  'TID': '48',
  'TNEng': 'Farmacy',
  'TN': 'Tiệm thuốc'
}, {
  'TID': '34',
  'TNEng': 'School** Stationery** and Office Supply Stores',
  'TN': 'Trường** văn phòng phẩm'
}, {
  'TID': '58',
  'TNEng': 'Legal Services and Attorneys',
  'TN': 'Văn phòng Luật sư'
}];
var aTypeCardE = [{
  'TID': '9',
  'TNEng': 'Advanced cash locations (not atm machine)',
  'TN': 'Các điểm ứng tiền mặt (không phải máy ATM)'
}, {
  'TID': '57',
  'TNEng': 'Advertising and Services',
  'TN': 'Dịch vụ quảng cáo'
}, {
  'TID': '49',
  'TNEng': 'Antique Shops-Sales** Repairs** and Restoration Services',
  'TN': 'Cửa hàng đồ cổ: bán** sữa chữa** phục hồi'
}, {
  'TID': '54',
  'TNEng': 'Athletic Fields** Professional Sports Clubs',
  'TN': 'Câu lạc bộ thể thao'
}, {
  'TID': '42',
  'TNEng': 'Automobile Rental Agency ',
  'TN': 'Cho thuê ô tô'
}, {
  'TID': '61',
  'TNEng': 'Automobile Rental Agency ',
  'TN': 'Cho thuê xe ô tô'
}, {
  'TID': '43',
  'TNEng': 'Bakery goods** wedding cakes',
  'TN': 'Tiệm bánh ngọt'
}, {
  'TID': '47',
  'TNEng': 'Bars** Taverns** Nightclubs**  Discotheques',
  'TN': 'Bar** CLB đêm'
}, {
  'TID': '16',
  'TNEng': 'Beauty hair store',
  'TN': 'Cửa hàng cắt tóc thẩm mỹ'
}, {
  'TID': '37',
  'TNEng': 'Beer and Wine Shops',
  'TN': 'Bán rượu bia'
}, {
  'TID': '3',
  'TNEng': 'Book Store',
  'TN': 'Nhà sách'
}, {
  'TID': '10',
  'TNEng': 'Camera and camera device store',
  'TN': 'Cửa hàng máy ảnh và dụng cụ hỗ trợ ngành ảnh'
}, {
  'TID': '44',
  'TNEng': 'Car and Truck Dealer -Sales** Service** Repairs** Parts** Leasing',
  'TN': 'Bán** sữa chữa bảo trì xe ôtô'
}, {
  'TID': '60',
  'TNEng': 'Childrens and Infants Wear Stores',
  'TN': 'Thời trang trẻ em và trẻ sơ sinh'
}, {
  'TID': '38',
  'TNEng': 'Commercial Art** Graphics** Photography',
  'TN': 'Nghệ thuật** Đồ họa** Nhiếp ảnh'
}, {
  'TID': '14',
  'TNEng': 'Cosmetic Store',
  'TN': 'Cửa hàng mỹ phẩm'
}, {
  'TID': '39',
  'TNEng': 'Dance Halls** Studios** and Schools',
  'TN': 'Studio** Trường dạy khiêu vũ'
}, {
  'TID': '26',
  'TNEng': 'Dentistry',
  'TN': 'Nha khoa'
}, {
  'TID': '8',
  'TNEng': 'Electronic** computer** graphic design device store',
  'TN': 'Cửa hàng đồ dùng điện tử** vi tính và thiết kế đồ họa'
}, {
  'TID': '4',
  'TNEng': 'Family devices store',
  'TN': 'Cửa hàng vật dụng gia đình'
}, {
  'TID': '48',
  'TNEng': 'Farmacy',
  'TN': 'Tiệm thuốc'
}, {
  'TID': '36',
  'TNEng': 'Fast Food Restaurants',
  'TN': 'Bán thức ăn nhanh** coffee'
}, {
  'TID': '50',
  'TNEng': 'Florists ',
  'TN': 'Cửa hàng hoa tươi'
}, {
  'TID': '15',
  'TNEng': 'Glasses Store',
  'TN': 'Cửa hàng mắt kính'
}, {
  'TID': '24',
  'TNEng': 'Gold** silver**  precious stones** watch** wear store',
  'TN': 'Cửa hàng vàng** bạc** đá quý** đồng hồ** trang sức'
}, {
  'TID': '11',
  'TNEng': 'Golf-court',
  'TN': 'Sân golf'
}, {
  'TID': '6',
  'TNEng': 'Handicraft art production',
  'TN': 'Hàng thủ công mỹ nghệ'
}, {
  'TID': '23',
  'TNEng': 'Handy store',
  'TN': 'Cửa hàng tiện lợi'
}, {
  'TID': '40',
  'TNEng': 'Hobby** Toy** and Games Shops',
  'TN': 'Đồ chơi** trò chơi giải trí'
}, {
  'TID': '1',
  'TNEng': 'Hospitals',
  'TN': 'Bệnh viện'
}, {
  'TID': '18',
  'TNEng': 'Hotel** pleasure house** holiday resort',
  'TN': 'Khách sạn** nhà trọ** khu nghỉ mát'
}, {
  'TID': '56',
  'TNEng': 'Isurance Sales** Underwriting** and Premiums',
  'TN': 'Công ty bảo hiểm'
}, {
  'TID': '21',
  'TNEng': 'Leather and luggage store',
  'TN': 'Cửa hàng da thuộc và hành lý'
}, {
  'TID': '58',
  'TNEng': 'Legal Services and Attorneys',
  'TN': 'Văn phòng Luật sư'
}, {
  'TID': '53',
  'TNEng': 'Management Consulting and Public Relations Services',
  'TN': 'Dịch vụ tư vấn'
}, {
  'TID': '59',
  'TNEng': 'Miscellaneous Apparel and Accessory Stores',
  'TN': 'Cửa hàng thời trang** hiệu vải'
}, {
  'TID': '22',
  'TNEng': 'Motobike store',
  'TN': 'Cửa hàng bán xe gắn máy'
}, {
  'TID': '52',
  'TNEng': 'Real Estate Agents and Managers- Rentals',
  'TN': 'Dịch vụ giao dịch bất động sản(phí quản lý** hoa hồng**thuê)'
}, {
  'TID': '46',
  'TNEng': 'Record Shops',
  'TN': 'Cửa hàng băng đĩa '
}, {
  'TID': '5',
  'TNEng': 'Restaurants',
  'TN': 'Nhà hàng ăn uống'
}, {
  'TID': '34',
  'TNEng': 'School** Stationery** and Office Supply Stores',
  'TN': 'Trường** văn phòng phẩm'
}, {
  'TID': '51',
  'TNEng': 'Security Brokers and Dealers',
  'TN': 'Môi giới chứng khoán'
}, {
  'TID': '7',
  'TNEng': 'Shoes Store',
  'TN': 'Cửa hàng giày dép'
}, {
  'TID': '2',
  'TNEng': 'Souvenir Store',
  'TN': 'Cửa hàng quà lưu niệm'
}, {
  'TID': '19',
  'TNEng': 'Sportswear shop',
  'TN': 'Cửa hàng quần áo thể thao'
}, {
  'TID': '13',
  'TNEng': 'Stake** gamble** electronics game',
  'TN': 'Dịch vụ giải trí'
}, {
  'TID': '12',
  'TNEng': 'SuperMarket',
  'TN': 'Siêu thị'
}, {
  'TID': '33',
  'TNEng': 'Tailor and Seamstresses** Mending and Alterations',
  'TN': 'Nhà may'
}, {
  'TID': '20',
  'TNEng': 'Telephone and telecom device store',
  'TN': 'Cửa hàng điện thoại và các thiết bị viễn thông'
}, {
  'TID': '17',
  'TNEng': 'Tourist agency',
  'TN': 'Đại lý du lịch'
}, {
  'TID': '35',
  'TNEng': 'Transportation Services - Not Elsewhere Classified',
  'TN': 'Dịch vụ vận tải'
}, {
  'TID': '25',
  'TNEng': 'Universitys** Colleges',
  'TN': 'Các trường Đại học** Cao đẳng**…'
}, {
  'TID': '41',
  'TNEng': 'Utilities - Electric** Gas** Water** and Sanitary',
  'TN': 'Các tiện ích - Điện** nước** ga** vệ sinh'
}, {
  'TID': '55',
  'TNEng': 'Video Amusement Game Supplies',
  'TN': 'Tiệm game** trò chơi điện tử'
}, {
  'TID': '45',
  'TNEng': 'Womens Accessory and Specialty Shops',
  'TN': 'Cửa hàng bán phụ kiện dành cho nữ'
}];
var strCom = '{'cp':'1','cr':'20','tr':'85','tp':'5','isActive':'1','sID':'2','oSuggest':[],'dsCompany':[{'ID':'280','NVie':'Chi nhánh Bình Phú','NEng':'Binh Phu Branch Office                                                                                                                                                                                                                                    ','AddEng':'110-112-114 Cho Lon Str.** Ward 11** Dist. 6** Ho Chi Minh City','AddVie':'110-112-114 Chợ Lớn** P.11** Q.6** Tp.HCM','AddN':'110**Chợ Lớn**Q. 6**P. 11**11**25','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'866063_2484424','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'110','sn':'Chợ Lớn','wn':'P. 11','dn':'Q. 6','wID':'11','dID':'25','P':'(028) 37554314','F':'(028) 37554318','Info':'','Mger':'Võ Đức Thọ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXBPU ','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409000E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'289','NVie':'Chi nhánh Bình Tân','NEng':'Binh Tan Branch Office                                                                                                                                                                                                                                    ','AddEng':'10 Kinh Duong Vuong Str.** Ward 13** Dist. 6** Ho Chi Minh City.','AddVie':'10 Kinh Dương Vương** P.13** Q.6** TP.HCM ','AddN':'10**Kinh Dương Vương**Q. 6**P. 13**29**25','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'866399_2482936','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'10','sn':'Kinh Dương Vương','wn':'P. 13','dn':'Q. 6','wID':'29','dID':'25','P':'(028) 37527073','F':'(028) 37527076','Info':'','Mger':'Đoàn Khắc Hoàng','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXBTN','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409090E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'251','NVie':'Chi nhánh Chợ Lớn','NEng':'Cho Lon Branch Office                                                                                                                                                                                                                                     ','AddEng':'141 Nguyen Chi Thanh Str.** Ward 9** Dist. 5** Ho Chi Minh City','AddVie':'141 Nguyễn Chí Thanh** P. 9** Q. 5** Tp.HCM ','AddN':'141**Nguyễn Chí Thanh**Q. 5**P. 9**9**20','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'872575_2481820','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'141','sn':'Nguyễn Chí Thanh','wn':'P. 9','dn':'Q. 5','wID':'9','dID':'20','P':'(028) 39575287','F':'(028) 39575290','Info':'','Mger':'Lưu Nguyên Vũ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXSG5','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404010E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'1460','NVie':'Chi nhánh Cộng Hòa','NEng':'Cong Hoa Branch Office                                                                                                                                                                                                                                    ','AddEng':'19 Cong Hoa Str.** Ward 12** Tan Binh Dist.**Ho Chi Minh City','AddVie':'19 Cộng Hòa** P. 12** Q.Tân Bình** TP.HCM','AddN':'19**Cộng Hòa**Q. Tan Binh**P. 4**4**22','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'870819_2473958','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'19','sn':'Cộng Hòa','wn':'P. 4','dn':'Q. Tan Binh','wID':'4','dID':'22','P':'(028) 38121617','F':'(028) 38122161','Info':'','Mger':'Nguyễn Xuân Lập','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXCHA','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=070506050A000B0B0C010B0C0A0A010A01','lnkLocation':'','website':''},{'ID':'252','NVie':'Chi nhánh Hòa Bình','NEng':'Hoa Binh Branch Office                                                                                                                                                                                                                                    ','AddEng':'78 Nguyen Trai Str.** Ward 3** Dist. 5** Ho Chi Minh City','AddVie':'78 Nguyễn Trãi** P. 3** Q. 5** TP. HCM ','AddN':'78**Nguyễn Trãi**Q. 5**P. 3**3**20','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'874997_2482130','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'78','sn':'Nguyễn Trãi','wn':'P. 3','dn':'Q. 5','wID':'3','dID':'20','P':'(028) 39245802','F':'(028) 39245812','Info':'','Mger':'Lâm Hòa Đạt','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXHBH','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404020E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'319','NVie':'Chi nhánh Phú Mỹ Hưng','NEng':'Phu My Hung Branch Office                                                                                                                                                                                                                                 ','AddEng':'10** Tan Trao Str.** Tan Phu Ward** Dist.7** Hochiminh City. ','AddVie':'(Tầng trệt + tầng lửng) Tòa nhà số 10 Tân Trào** P.Tân Phú** Q.7** TP.HCM','AddN':'0**Tân Trào**Q. 7**P. Tan Phu**37**41','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'882849_2487780','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'0','sn':'Tân Trào','wn':'P. Tan Phu','dn':'Q. 7','wID':'37','dID':'41','P':'(028) 54135588','F':'(028) 54135589','Info':'','Mger':'Phan Diên Vỹ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXPMH','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0500090E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'253','NVie':'Chi nhánh Quận 10','NEng':'District 10 Branch Office                                                                                                                                                                                                                                 ','AddEng':'65-65A & 63/6 3/2 Str.** Ward 11.** Dist. 10** Ho Chi Minh City','AddVie':'65-65A và 63/6 Ba Tháng Hai** P.11** Q.10** TP.HCM ','AddN':'65**3 Tháng 2**Q. 10**P. 11**11**19','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'874693_2479062','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'65','sn':'3 Tháng 2','wn':'P. 11','dn':'Q. 10','wID':'11','dID':'19','P':'(028) 39295959','F':'(028) 39295858','Info':'','Mger':'Trần Quang Hải','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVX10D ','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404030E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'254','NVie':'Chi nhánh Quận 11','NEng':'District 11 Branch Office                                                                                                                                                                                                                                 ','AddEng':'31-33 Au Co Str.** Ward 14** Dist. 11**Ho Chi Minh City','AddVie':'31-33 Âu Cơ** P.14** Q.11** TP.HCM','AddN':'31**Âu Cơ**Q. 11**P. 14**28**24','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'869659_2479844','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'31','sn':'Âu Cơ','wn':'P. 14','dn':'Q. 11','wID':'28','dID':'24','P':'(028) 39744300','F':'(028) 38652892','Info':'','Mger':'Đinh Văn Khải','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVX11D','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404040E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'3654','NVie':'Chi nhánh Quận 3','NEng':'District 3 Branch                                                                                                                                                                                                                                         ','AddEng':'(1st Floor - 3rd Floor) 21 Kỳ Dong st.** Ward 9** District 3** Ho Chi Minh City','AddVie':'(Tầng 1 - Tầng 3) Tòa nhà số 21 Kỳ Đồng** P.9** Q.3** Tp.HCM','AddN':'21**Kỳ Đồng**Q. 3**P. 9**9**17','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'875393_2477494','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'21','sn':'Kỳ Đồng','wn':'P. 9','dn':'Q. 3','wID':'9','dID':'17','P':'(028) 39300653','F':'(028) 39300516','Info':'','Mger':'Giám đốc Bà Nguyễn Thị Hải Anh','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=050705010A000B0B0C010B0C0A0A010A01','lnkLocation':'','website':''},{'ID':'260','NVie':'Chi nhánh Quận 4','NEng':'District 4 Branch Office                                                                                                                                                                                                                                  ','AddEng':'H2 Building** Hoang Dieu Str.** Ward 8** Dist. 4**Ho Chi Minh City','AddVie':'Tòa nhà H2 Đường Hoàng Diệu** P.8** Q.4** TP.HCM','AddN':'0**Hoàng Diệu**Q. 4**P. 8**8**21','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'879197_2481266','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'0','sn':'Hoàng Diệu','wn':'P. 8','dn':'Q. 4','wID':'8','dID':'21','P':'(028) 39414947','F':'(028) 39414948','Info':'','Mger':'Nguyễn Ngọc Thạch','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXQ04','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=0407000E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'261','NVie':'Chi nhánh Quận 7','NEng':'District 7 Branch Office                                                                                                                                                                                                                                  ','AddEng':'849 Huynh Tan Phat Str.** Phu Thuan Ward** Dist. 7** Ho Chi Minh City','AddVie':'849 Huỳnh Tấn Phát** P.Phú Thuận** Q.7** TP.HCM','AddN':'849**Huỳnh Tấn Phát**Q. 7**P. Phu Thuan**38**41','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'884625_2487030','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'849','sn':'Huỳnh Tấn Phát','wn':'P. Phu Thuan','dn':'Q. 7','wID':'38','dID':'41','P':'(028) 37733063','F':'(028) 37733053','Info':'','Mger':'Nguyễn Kiện','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXQ07','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0407010E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'259','NVie':'Chi nhánh Sài Gòn','NEng':'Sai Gon Branch Office                                                                                                                                                                                                                                     ','AddEng':'(Ground + Entresol + 2nd Floor) 136-138 Le Thi Hong Gam St.** Nguyen Thai Binh Ward** Dist. 1** Ho Chi Minh City','AddVie':'(Tầng trệt + lửng + tầng 2) Tòa nhà số 136 -138 Lê Thị Hồng Gấm** P.Nguyễn Thái Bình** Q.1** TP.HCM ','AddN':'136**Lê Thị Hồng Gấm**Q. 1**P. Nguyen Thai Binh**19**18','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'878233_2480096','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'136','sn':'Lê Thị Hồng Gấm','wn':'P. Nguyen Thai Binh','dn':'Q. 1','wID':'19','dID':'18','P':'(028) 39143152','F':'(028) 39143150','Info':'','Mger':'Huỳnh Thị Trinh','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXTTD ','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404090E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'258','NVie':'Chi nhánh Tân Định','NEng':'Tan Dinh Branch Office                                                                                                                                                                                                                                    ','AddEng':'78 Tran Quang Khai Str.** Tan Dinh Ward** Dist. 11** Ho Chi Minh City','AddVie':'78 Trần Quang Khải** P.Tân Định** Q. 1** TP.HCM','AddN':'78**Trần Quang Khải**Q. 1**P. Tan Dinh**17**18','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'877513_2475612','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'78','sn':'Trần Quang Khải','wn':'P. Tan Dinh','dn':'Q. 1','wID':'17','dID':'18','P':'(028) 35267979','F':'(028) 35268989','Info':'','Mger':'Lê Kim Hùng','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXTDH ','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404080E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'335','NVie':'Chi nhánh Tân Sơn Nhất','NEng':'Tan Son Nhat Branch office                                                                                                                                                                                                                                ','AddEng':'307 Nguyen Van Troi St.** Ward 1** Tan Binh Dist.** Ho Chi Minh City','AddVie':'307 Nguyễn Văn Trỗi** P.1** Q. Tân Bình** TP.HCM','AddN':'307**Nguyễn Văn Trỗi**Q. Tan Binh**P. 1**1**22','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'872871_2474194','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'307','sn':'Nguyễn Văn Trỗi','wn':'P. 1','dn':'Q. Tan Binh','wID':'1','dID':'22','P':'(028) 38456 370','F':'(028) 38456 372','Info':'','Mger':'Lê Hải Lâm','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXTSN','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0502050E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'281','NVie':'Chi nhánh Thành phố Hồ Chí Minh','NEng':'Ho Chi Minh City Branch Office                                                                                                                                                                                                                            ','AddEng':'(1st - 7th floor) 229 Dong Khoi St** Ben Nghe Ward** Dist. 1** Ho Chi Minh City','AddVie':'(Tầng 1 - Tầng 7) Tòa nhà số 229 Đồng Khởi** P.Bến Nghé** Q. 1** TP.HCM','AddN':'229**Đồng Khởi**Q. 1**P. Ben Nghe**14**18','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'878817_2478220','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'229','sn':'Đồng Khởi','wn':'P. Ben Nghe','dn':'Q. 1','wID':'14','dID':'18','P':'(028) 38210055','F':'(028) 38296063','Info':'','Mger':'Nguyễn Quốc Hương','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVX1CB','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409010E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'277','NVie':'Chi nhánh Thủ Đức','NEng':'Thu Duc Branch Office                                                                                                                                                                                                                                     ','AddEng':'147A Vo Van Ngan Str.** Linh Chieu Ward** Thu Duc Dist.** Ho Chi Minh City','AddVie':'147A Võ Văn Ngân** P.Linh Chiểu** Q.Thủ Đức** TP.HCM','AddN':'147**Võ Văn Ngân**Q. Thu Duc**P. Linh Chieu**132**45','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'890139_2464564','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'147','sn':'Võ Văn Ngân','wn':'P. Linh Chieu','dn':'Q. Thu Duc','wID':'132','dID':'45','P':'(028) 37225450','F':'(028) 37225448','Info':'','Mger':'Lê Phước Tri','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXTDC','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=0406070E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'282','NVie':'Phòng giao dịch 3 Tháng 2 ','NEng':'3/2 Transaction Office                                                                                                                                                                                                                                    ','AddEng':'530 3/2 Str.** Ward 14** Dist.10** Ho Chi Minh City','AddVie':'530 Ba Tháng Hai** P.14** Q.10** TP.HCM','AddN':'530**3 Tháng 2**Q. 10**P. 14**28**19','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'872205_2480472','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'530','sn':'3 Tháng 2','wn':'P. 14','dn':'Q. 10','wID':'28','dID':'19','P':'(028) 38687490','F':'(028) 38687492','Info':'','Mger':'Lý Đức Hữu','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=0409020E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'379','NVie':'Phòng giao dịch An Đông ','NEng':'An Dong Transaction Office                                                                                                                                                                                                                                ','AddEng':'265 Tran Phu Str.** Ward 8** Dist. 5** Ho Chi Minh City','AddVie':'265 Trần Phú** P. 8** Q. 5** TP.HCM','AddN':'265**Trần Phú**Q. 5**P. 8**8**20','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'873833_2482306','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'265','sn':'Trần Phú','wn':'P. 8','dn':'Q. 5','wID':'8','dID':'20','P':'(028) 39245863','F':'(028) 38382553','Info':'','Mger':'Bùi Huy Thắng','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0506090E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'2437','NVie':'Phòng giao dịch An Lạc','NEng':'An Lac Transaction Office                                                                                                                                                                                                                                 ','AddEng':'476-478 Kinh Duong Vuong Str.** An Lac A Ward** Binh Tan Dist.** Hochiminh City.','AddVie':'476-478 Kinh Dương Vương** P.An Lạc A** Q.Bình Tân** TP.HCM ','AddN':'476**Kinh Dương Vương**Q. Binh Tan**P. An Lac A**65**39','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'862993_2485752','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'476','sn':'Kinh Dương Vương','wn':'P. An Lac A','dn':'Q. Binh Tan','wID':'65','dID':'39','P':'(028) 37527991','F':'(028) 37527992','Info':'','Mger':'Trưởng Phòng Bà Vương Thị Loan ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=040503020A000B0B0C010B0C0A0A000A01','lnkLocation':'','website':''},{'ID':'2223','NVie':'Phòng giao dịch An Sương','NEng':'EIB An Suong Transaction Office                                                                                                                                                                                                                           ','AddEng':'379-381 Truong Chinh Str.** Tan Thoi Nhat Ward** Dist.12** HCM city','AddVie':'379-381 Trường Chinh** P.Tân Thới Nhất** Q.12** TPHCM','AddN':'379**Trường Chinh**Q. 12**P. Tan Thoi Nhat**137**44','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'863607_2467134','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'379','sn':'Trường Chinh','wn':'P. Tan Thoi Nhat','dn':'Q. 12','wID':'137','dID':'44','P':'(028) 35921905','F':'(028) 35921908','Info':'','Mger':'','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=040302060A000B0B0C010B0C0A0A000A01','lnkLocation':'','website':''}]}';
var strComE = '{'cp':'1','cr':'20','tr':'85','tp':'5','sID':'2','oSuggest':[],'dsCompany':[{'ID':'282','NVie':'Phòng giao dịch 3 Tháng 2 ','NEng':'3/2 Transaction Office                                                                                                                                                                                                                                    ','AddEng':'530 3/2 Str.** Ward 14** Dist.10** Ho Chi Minh City','AddVie':'530 Ba Tháng Hai** P.14** Q.10** TP.HCM','AddN':'530**3 Tháng 2**Q. 10**P. 14**28**19','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'872205_2480472','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'530','sn':'3 Tháng 2','wn':'P. 14','dn':'Q. 10','wID':'28','dID':'19','P':'(028) 38687490','F':'(028) 38687492','Info':'','Mger':'Lý Đức Hữu','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=0409020E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'379','NVie':'Phòng giao dịch An Đông ','NEng':'An Dong Transaction Office                                                                                                                                                                                                                                ','AddEng':'265 Tran Phu Str.** Ward 8** Dist. 5** Ho Chi Minh City','AddVie':'265 Trần Phú** P. 8** Q. 5** TP.HCM','AddN':'265**Trần Phú**Q. 5**P. 8**8**20','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'873833_2482306','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'265','sn':'Trần Phú','wn':'P. 8','dn':'Q. 5','wID':'8','dID':'20','P':'(028) 39245863','F':'(028) 38382553','Info':'','Mger':'Bùi Huy Thắng','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0506090E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'2437','NVie':'Phòng giao dịch An Lạc','NEng':'An Lac Transaction Office                                                                                                                                                                                                                                 ','AddEng':'476-478 Kinh Duong Vuong Str.** An Lac A Ward** Binh Tan Dist.** Hochiminh City.','AddVie':'476-478 Kinh Dương Vương** P.An Lạc A** Q.Bình Tân** TP.HCM ','AddN':'476**Kinh Dương Vương**Q. Binh Tan**P. An Lac A**65**39','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'862993_2485752','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'476','sn':'Kinh Dương Vương','wn':'P. An Lac A','dn':'Q. Binh Tan','wID':'65','dID':'39','P':'(028) 37527991','F':'(028) 37527992','Info':'','Mger':'Trưởng Phòng Bà Vương Thị Loan ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=040503020A000B0B0C010B0C0A0A000A01','lnkLocation':'','website':''},{'ID':'283','NVie':'Phòng giao dịch Âu Cơ','NEng':'Au Co Transaction Office                                                                                                                                                                                                                                  ','AddEng':'344-346 Au Co St.** Ward 10** Tan Binh Dist.** Ho Chi Minh City','AddVie':'344-346 Âu Cơ** P.10** Q.Tân Bình** TP.HCM','AddN':'344**Âu Cơ**Q. Tan Binh**P. 10**10**22','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'868717_2478468','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'344','sn':'Âu Cơ','wn':'P. 10','dn':'Q. Tan Binh','wID':'10','dID':'22','P':'(028) 39750671','F':'(028) 39750672','Info':'','Mger':'Võ Khắc Nghĩa','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409030E000A0202070A080F0A000A00','lnkLocation':'','website':''},{'ID':'288','NVie':'Phòng giao dịch Bắc Hải ','NEng':'Bac Hai Transaction Office                                                                                                                                                                                                                                ','AddEng':'2 Bis Cuu Long Str.** Bac Hai Hostel** Ward 15** Dist.10** Ho Chi Minh City','AddVie':'2 Bis Cửu Long** Cư xá Bắc Hải** P. 15** Q. 10** TP.HCM','AddN':'2**Cửu Long**Q. 10**P. 15**25**19','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'871865_2477956','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'2','sn':'Cửu Long','wn':'P. 15','dn':'Q. 10','wID':'25','dID':'19','P':'(028) 39708906','F':'(028) 39708905','Info':'','Mger':'Lê Thị Hồng Hà','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409080E000A0202070A080F0A030A00','lnkLocation':'','website':''},{'ID':'287','NVie':'Phòng giao dịch Bàn Cờ','NEng':'Ban Co Transaction Office                                                                                                                                                                                                                                 ','AddEng':'766-768 Nguyen Dinh Chieu Str.** Ward 21** Dist. 3** Ho Chi Minh City','AddVie':'766-768 Nguyễn Đình Chiểu** P.1** Q.3** TP.HCM','AddN':'766**Nguyễn Đình Chiểu**Q. 3**P. 1**1**17','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'874871_2480402','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'766','sn':'Nguyễn Đình Chiểu','wn':'P. 1','dn':'Q. 3','wID':'1','dID':'17','P':'(028) 38333424','F':'(028) 38333427','Info':'','Mger':'Nguyễn Thị Minh Hoa','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409070E000A0202070A080F0A030A00','lnkLocation':'','website':''},{'ID':'327','NVie':'Phòng giao dịch Bảy Hiền','NEng':'Bay Hien Transaction Office                                                                                                                                                                                                                               ','AddEng':'427 Ly Thuong Kiet Str.** Ward 8** Dist. Tan Binh** Ho Chi Minh City','AddVie':'427 Lý Thường Kiệt** P.8** Q.Tân Bình** Tp. HCM.','AddN':'427**Lý Thường Kiệt**Q. Tan Binh**P. 8**8**22','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'870215_2477166','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'427','sn':'Lý Thường Kiệt','wn':'P. 8','dn':'Q. Tan Binh','wID':'8','dID':'22','P':'(028) 39716626','F':'(028) 39716628','Info':'','Mger':'Nguyễn Tấn Chức','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0503070E000A0202070A080F0A040A00','lnkLocation':'','website':''},{'ID':'1463','NVie':'Phòng giao dịch Bến Chương Dương ','NEng':'Ben Chuong Duong Transaction Office                                                                                                                                                                                                                       ','AddEng':'327 Ben Chuong Duong Str.** Cau Kho Ward** Dist. 1** Ho Chi Minh City','AddVie':'327 Bến Chương Dương** P. Cầu Kho** Q. 1** TP.HCM','AddN':'0**Bến Chương Dương**Q. 1**P. Nguyen Thai Binh**19**18','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'879109_2480226','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'0','sn':'Bến Chương Dương','wn':'P. Nguyen Thai Binh','dn':'Q. 1','wID':'19','dID':'18','P':'(028) 38364495','F':'(028) 38364675','Info':'','Mger':'Lê Đào Thy','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=070506060A000B0B0C010B0C0A0A010A01','lnkLocation':'','website':''},{'ID':'332','NVie':'Phòng giao dịch Bến Nghé','NEng':'Ben Nghe Transaction Office                                                                                                                                                                                                                               ','AddEng':'11A-11B Nguyễn Thị Minh Khai Str.**Ben Nghe Ward ** Dist.1.** Ho Chi Minh City','AddVie':'11A-11B Nguyễn Thị Minh Khai** P.Bến Nghé** Q.1** TP.HCM','AddN':'11**Nguyễn Thị Minh Khai**Q. 1**P. Ben Nghe**14**18','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'879039_2476690','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'11','sn':'Nguyễn Thị Minh Khai','wn':'P. Ben Nghe','dn':'Q. 1','wID':'14','dID':'18','P':'(028) 39105433','F':'(028) 39105594','Info':'','Mger':'Hồ Lộc','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=0502020E000A0202070A080F0A060A00','lnkLocation':'','website':''},{'ID':'311','NVie':'Phòng giao dịch Bến Thành','NEng':'Ben Thanh Transaction Office                                                                                                                                                                                                                              ','AddEng':'36-38 Ngo Duc Ke Str.** Ben Nghe Ward** Dist. 1** Ho Chi Minh City','AddVie':'36-38 Ngô Đức Kế** P.Bến Nghé** Q.1** TP.HCM','AddN':'36**Ngô Đức Kế**Q. 1**P. Ben Nghe**14**18','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'879735_2479210','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'36','sn':'Ngô Đức Kế','wn':'P. Ben Nghe','dn':'Q. 1','wID':'14','dID':'18','P':'(028) 38271011','F':'(028) 38271012','Info':'','Mger':'Nguyễn Thị Kiều','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0500010E000A0202070A080F0A030A00','lnkLocation':'','website':''},{'ID':'1764','NVie':'Phòng giao dịch Bình Chánh','NEng':'Binh Chanh Transaction Ofifce                                                                                                                                                                                                                             ','AddEng':'A29/25 National Highway 50** Binh Chanh Dist** Ho Chi Minh City ','AddVie':'A29/25 Quốc lộ 50** Xã Bình Hưng** Huyện Bình Chánh** TP.HCM','AddN':'0**Quốc Lộ 50**Q. Binh Chanh**P. Binh Hung**94**36','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'870543_2487490','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'0','sn':'Quốc Lộ 50','wn':'P. Binh Hung','dn':'Q. Binh Chanh','wID':'94','dID':'36','P':'(028) 37581771','F':'(028) 37581007','Info':'','Mger':'Ông Lê Minh Hữu ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=070606010A000B0B0C010B0C0A0A030A01','lnkLocation':'','website':''},{'ID':'280','NVie':'Chi nhánh Bình Phú','NEng':'Binh Phu Branch Office                                                                                                                                                                                                                                    ','AddEng':'110-112-114 Cho Lon Str.** Ward 11** Dist. 6** Ho Chi Minh City','AddVie':'110-112-114 Chợ Lớn** P.11** Q.6** Tp.HCM','AddN':'110**Chợ Lớn**Q. 6**P. 11**11**25','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'866063_2484424','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'110','sn':'Chợ Lớn','wn':'P. 11','dn':'Q. 6','wID':'11','dID':'25','P':'(028) 37554314','F':'(028) 37554318','Info':'','Mger':'Võ Đức Thọ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXBPU ','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409000E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'289','NVie':'Chi nhánh Bình Tân','NEng':'Binh Tan Branch Office                                                                                                                                                                                                                                    ','AddEng':'10 Kinh Duong Vuong Str.** Ward 13** Dist. 6** Ho Chi Minh City.','AddVie':'10 Kinh Dương Vương** P.13** Q.6** TP.HCM ','AddN':'10**Kinh Dương Vương**Q. 6**P. 13**29**25','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'866399_2482936','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'10','sn':'Kinh Dương Vương','wn':'P. 13','dn':'Q. 6','wID':'29','dID':'25','P':'(028) 37527073','F':'(028) 37527076','Info':'','Mger':'Đoàn Khắc Hoàng','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXBTN','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0409090E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'381','NVie':'Phòng giao dịch Bình Trị Đông','NEng':'Binh Tri Dong Transaction office                                                                                                                                                                                                                          ','AddEng':'141-141A 1st St.** Binh Tri Dong B Ward** Binh Tan Dist.** Ho Chi Minh City','AddVie':'141-141A Đường số 1** P.Bình Trị Đông B** Q.Bình Tân** TP.HCM','AddN':'141**Đường Số 1**Q. Binh Tan**P. Binh Tri Dong B**125**39','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'863343_2483922','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'141','sn':'Đường Số 1','wn':'P. Binh Tri Dong B','dn':'Q. Binh Tan','wID':'125','dID':'39','P':'(028) 38170493','F':'(028) 38170498','Info':'','Mger':'Dương Hoàng Nam','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0509010E000A0202070A080F0A030A00','lnkLocation':'','website':''},{'ID':'320','NVie':'Phòng giao dịch Bùi Thị Xuân','NEng':'Bui Thi Xuan Transaction Office                                                                                                                                                                                                                           ','AddEng':'122A-B-C Bui Thi Xuan Str.** Pham Ngu Lao Ward** Dist.1** Ho Chi Minh City','AddVie':'(Tầng trệt và tầng lửng) Tòa nhà 122A-B-C Bùi Thị Xuân** P.Phạm Ngũ Lão** Q. 1** TP.HCM','AddN':'122**Bùi Thị Xuân**Q. Tan Binh**P. 2**2**22','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'871621_2474086','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'122','sn':'Bùi Thị Xuân','wn':'P. 2','dn':'Q. Tan Binh','wID':'2','dID':'22','P':'(028) 54043380','F':'(028) 54043381','Info':'','Mger':'Nguyễn Thị Huyền Trang','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0503000E000A0202070A080F0A050A00','lnkLocation':'','website':''},{'ID':'251','NVie':'Chi nhánh Chợ Lớn','NEng':'Cho Lon Branch Office                                                                                                                                                                                                                                     ','AddEng':'141 Nguyen Chi Thanh Str.** Ward 9** Dist. 5** Ho Chi Minh City','AddVie':'141 Nguyễn Chí Thanh** P. 9** Q. 5** Tp.HCM ','AddN':'141**Nguyễn Chí Thanh**Q. 5**P. 9**9**20','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'872575_2481820','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'141','sn':'Nguyễn Chí Thanh','wn':'P. 9','dn':'Q. 5','wID':'9','dID':'20','P':'(028) 39575287','F':'(028) 39575290','Info':'','Mger':'Lưu Nguyên Vũ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXSG5','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404010E000A0202070A080F0A010A00','lnkLocation':'','website':''},{'ID':'1460','NVie':'Chi nhánh Cộng Hòa','NEng':'Cong Hoa Branch Office                                                                                                                                                                                                                                    ','AddEng':'19 Cong Hoa Str.** Ward 12** Tan Binh Dist.**Ho Chi Minh City','AddVie':'19 Cộng Hòa** P. 12** Q.Tân Bình** TP.HCM','AddN':'19**Cộng Hòa**Q. Tan Binh**P. 4**4**22','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'870819_2473958','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'19','sn':'Cộng Hòa','wn':'P. 4','dn':'Q. Tan Binh','wID':'4','dID':'22','P':'(028) 38121617','F':'(028) 38122161','Info':'','Mger':'Nguyễn Xuân Lập','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVXCHA','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=070506050A000B0B0C010B0C0A0A010A01','lnkLocation':'','website':''},{'ID':'348','NVie':'Phòng giao dịch Đa Kao','NEng':'Da KaoTransaction Office                                                                                                                                                                                                                                  ','AddEng':'147-149 Nguyen Dinh Chieu Str.** Da KaoWard** Dist.1** Ho Chi Minh City','AddVie':'23A-B Nguyễn Đình Chiểu** P. Đa Kao** Q. 1** TP.HCM','AddN':'23**Nguyễn Đình Chiểu**Q. 1**P. Da Kao**16**18','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'878693_2476288','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'23','sn':'Nguyễn Đình Chiểu','wn':'P. Da Kao','dn':'Q. 1','wID':'16','dID':'18','P':'(028) 39110163','F':'(028) 39110161','Info':'','Mger':'Lê Mỹ Nhung ','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com.vn/EximBank/CompanyInfo.aspx?cID=0505080E000A0202070A080F0A070A00','lnkLocation':'','website':''},{'ID':'1470','NVie':'Phòng giao dịch Đầm Sen','NEng':'Dam Sen Transaction Office                                                                                                                                                                                                                                ','AddEng':'377A Minh Phung Str.** Ward 10** Dist.11** Ho Chi Minh City','AddVie':'377A Minh Phụng** P.10** Q. 11** TP.HCM','AddN':'377**Minh Phụng**Q. 11**P. 10**10**24','Gen':'True','Pvie':'Trưởng phòng','PEn':'Manager','XY':'868285_2481968','cID':'8','wHour':'','Def':'1','tID':'31','iw':'-1','no':'377','sn':'Minh Phụng','wn':'P. 10','dn':'Q. 11','wID':'10','dID':'24','P':'(028) 38581660','F':'(028) 38582595','Info':'','Mger':'Nguyễn Thái Quang','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=070507050A000B0B0C010B0C0A0A020A01','lnkLocation':'','website':''},{'ID':'253','NVie':'Chi nhánh Quận 10','NEng':'District 10 Branch Office                                                                                                                                                                                                                                 ','AddEng':'65-65A & 63/6 3/2 Str.** Ward 11.** Dist. 10** Ho Chi Minh City','AddVie':'65-65A và 63/6 Ba Tháng Hai** P.11** Q.10** TP.HCM ','AddN':'65**3 Tháng 2**Q. 10**P. 11**11**19','Gen':'True','Pvie':'Giám đốc','PEn':'Director','XY':'874693_2479062','cID':'8','wHour':'','Def':'1','tID':'30','iw':'-1','no':'65','sn':'3 Tháng 2','wn':'P. 11','dn':'Q. 10','wID':'11','dID':'19','P':'(028) 39295959','F':'(028) 39295858','Info':'','Mger':'Trần Quang Hải','Dis':'','LeadVN':'','LeadEN':'','status':'1','DisEng':'','SW':'EBVIVNVX10D ','logo':'http://webapi.diadiem.com/EximBank/CompanyInfo.aspx?cID=0404030E000A0202070A080F0A010A00','lnkLocation':'','website':''}]}';
var httpImg = 'http://webapi.diadiem.com/';
var httpImages = 'http://images.diadiem.com/';
oCate = -1;
var oParamAdv = -1;
