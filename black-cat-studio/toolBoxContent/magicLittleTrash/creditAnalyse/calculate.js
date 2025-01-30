
var creditDetail = []; //將使用者輸入的學分詳細內容推入
var mistakeDetail = ""; //將使用者輸入的不在《111年資訊工程學系-學生手冊》課程編號推入
var creditSum = 0; //總學分
var compulsoryCredit = 0; //系必修
var electiveCredit = 0; //系選修
var generalCredit = 0; //共同教育學分
var boyaCredit = 0; //博雅教育學分
var BCCredit = 0; //美學與文化
var SSCredit = 0; //公民與社會
var NTCredit = 0; //自然與科技
var PFCredit = 0; //體適能
var freeElectiveCredit = 0; //非本系自由選修學分
var nationalDefenseCredit = 0; //不計入畢業學分的國防教育

function calculateCredit(){
    for (var i = 0; i < creditDetail.length; i++) {
        var score = creditDetail[i].score;
        var eachCredit = creditDetail[i].credits;
        var subjectCode = creditDetail[i].subjectCode;

        switch(subjectCode){ //================系必修
            case "BFCZ002": //程式設計一
            case "BFCZ004": //計算機概論
            case "BFCZ005": //線性代數
            case "BFCZ170": //微積分一
            case "BFCZ171": //微積分二
            case "BFCZ006": //程式設計二
            case "BFCZ028": //基本電學
            case "BFCZ035": //計算機網路
            case "BFCZ013": //資料結構
            case "BFCZ017": //計算機組織
            case "BFCZ037": //電子電路概論
            case "BFCZ009": //離散數學
            case "BFCZ011": //組合語言與微處理機
            case "BFCZ036": //資料庫系統導論
            case "BFCZ040": //物件導向程式設計
            case "BFCZ012": //系統程式
            case "BFCZ015": //機率與統計
            case "BFCZ155": //軟體工程
            case "BFCZ026": //作業系統
            case "BFCZ033": //演算法
                if(score>=60){
                    creditSum += 3;
                    compulsoryCredit += 3;
                    break;
                } else {
                    break;
                }
            
            case "BFCZ038": //電子電路實習
            case "BFCZ030": //微處理機實習
                if(score>=60){
                    creditSum += 1;
                    compulsoryCredit += 1;
                    break;
                } else {
                    break;
                }

            case "BFCZ031": //實務專題一
            case "BFCZ032": //實務專題二
                if(score>=60){
                    creditSum += 2;
                    compulsoryCredit += 2;
                    break;
                } else {
                    break;
                }

            case "BFCZ172": //數位系統導論暨實習
                if(score>=60){
                    creditSum += 4;
                    compulsoryCredit+=4;
                    break;
                } else {
                    break;
                }
            
            //======================================系選修
            case "BFCZ044": //視覺話程式設計
            case "BFCZ100": //網頁設計與應用
            case "BFCZ136": //RFID概論
            case "BFCZ137": //Linux實務導論
            case "BFCZ052": //視窗程式設計
            case "BFCZ101": //科技英文一
            case "BFCZ175": //資訊科技技術與應用一
            case "BFCZ047": //網路程式設計
            case "BFCZ103": //工程數學
            case "BFCZ104": //科技英文二
            case "BFCZ067": //多媒體網路
            case "BFCZ176": //資訊科技技術與應用二
            case "BFCZ059": //影像處理導論
            case "BFCZ090": //資訊安全
            case "BFCZ116": //資料庫系統應用
            case "BFCZ131": //數位信號處理導論
            case "BFCZ156": //物聯網資訊系統
            case "BFCZ166": //Android APP 軟體設計上
            case "BFCZ055": //人工智慧導論
            case "BFCZ112": //軟體專案管理
            case "BFCZ129": //動態網頁設計
            case "BFCZ144": //行動多媒體程式設計
            case "BFCZ165": //物聯網實務
            case "BFCZ167": //Android APP 軟體設計下
            case "BFCZ158": //物聯網與電子商務應用
            case "BFCZ084": //類神經網路導論
            case "BFCZ111": //軟體架構
            case "BFCZ128": //VlSI設計導論
            case "BFCZ141": //車載隨意行動網路
            case "BFCZ173": //校外實習E
            case "BFCZ177": //人工智慧程式設計
            case "BFCZ093": //行動計算導論
                if(score>=60){
                    creditSum += 3;
                    electiveCredit+=3;
                    break;
                } else {
                    break;
                }

            case "BFCZ174": //校外實習D
                if(score>=60){
                    creditSum += 1;
                    electiveCredit+=1;
                    break;
                } else {
                    break;
                }
            
            //======================================共同教育
            case "GEC1111": //國文上===========國文課程
            case "GEC1121": //國文下
            case "GEC1212": //基礎學術英文上====英文課程
            case "GEC1222": //基礎學術英文下
            case "GEC2330": //教育英文
            case "GEC1231": //人文社會英文
            case "GEC1232": //商管英文
            case "GEC1233": //資訊英文
            case "GEC1234": //科學夠溝通英文
            case "GEC1235": //專業學術英文
            case "GEC1301": //網頁設計=========資訊課程 
            case "GEC1311": //數位影像處理
            case "GEC1304": //進階網頁設計
            case "GEC1307": //影音編輯設計與製作
            case "GEC1308": //動畫設計
            case "GEC1309": //文書處理與應用
            case "GEC1310": //試算表應用
            case "GEC1312": //計算機概論
            case "GEC1313": //商業簡報應用
            case "GEC1314": //程式設計
                if(score>=60){
                    generalCredit += 2;
                    creditSum += 2;
                    break;
                } else {
                    break;
                }
            
            //======================================公民與社會
            case "GEC2102": //倫理學與道德推理
            case "GEC2103": //邏輯與批判思考
            case "GEC2106": //應用倫理與跨領域對話
            case "GEC2116": //職業道德與職場倫理
            case "GEC2302": //海洋人文社會科學導論
            case "GEC2323": //台灣環境與社會發展
            case "GEC2341": //創業管理
            case "GEC2342": //新媒體導論
            case "GEC2401": //媒體與社會
            case "GEC2402": //憲法與人權
            case "GEC2403": //社會科通論
            case "GEC2404": //法律與生活
            case "GEC2405": //政治學通論
            case "GEC2406": //社會學通論
            case "GEC2407": //心理學通論
            case "GEC2408": //經濟學通論
            case "GEC2409": //管理學通論
            case "GEC2410": //法學通論
            case "GEC2411": //國際關係
            case "GEC2412": //生活經濟學
            case "GEC2413": //社會分析專題
            case "GEC2415": //愛情、婚姻與家庭
            case "GEC2417": //管理思想概論
            case "GEC2419": //個人理理財規劃
            case "GEC2422": //性別、空間與社會
            case "GEC2423": //人際溝通
            case "GEC2424": //財富管理
            case "GEC2425": //性別關係
            case "GEC2426": //生涯規劃
            case "GEC2431": //公共政策通論
            case "GEC2434": //非營利組織與社會參與
            case "GEC2436": //國際禮儀
            case "GEC2438": //全球化與兩岸關係
            case "GEC2439": //社會企業與公益創新
            case "GEC2440": //偏鄉數位關懷
            case "GEC2442": //永續發展與社會實踐
            case "GEC2443": //NFT虛擬貨幣與數位媒體
            case "GEC2444": //高齡社會與現代生活
            case "GEC2516": //性別與科學
            case "GEC2522": //智慧財產權
            case "GEC2713": //人際關係與社會互動
            case "GEC2712": //大學生的必修學分-感情教育
            case "GEC2730": //老人健康生活大改造：職能科學之生活應用
            case "GEC2739": //幸福入門-正向心理學
            case "GEC2736": //楚漢相爭之職場競爭力
            case "GEC2734": //學會學：學習之道
            case "GEC2724": //創意學經濟
            case "GEC2733": //職場溝通軟功夫
            case "GEC2731": //銀髮心理與生活
            case "GEC2738": //當代應用心理學
                if(score>=60){
                    creditSum += 2;
                    boyaCredit += 2;
                    SSCredit += 2;
                    break;
                } else {
                    break;
                }
            case "GEC2762": //國際競賽英語溝通表達[遠]
                if(score>=60){
                    creditSum += 1;
                    boyaCredit += 1;
                    SSCredit += 1;
                    break;
                } else {
                    break;
                }

            //======================================美學與文化
            case "GEC1102": //應用國文
            case "GEC2101": //哲學與當代議題
            case "GEC2104": //東方哲學與生活智慧
            case "GEC2105": //創意思考
            case "GEC2108": //人文經典之現代詮釋
            case "GEC2109": //生死學通論
            case "GEC2111": //世界宗教與多元文化
            case "GEC2112": //電影與人生
            case "GEC2114": //生命教育
            case "GEC2120": //人生哲學
            case "GEC2121": //儒家思想與現代生活
            case "GEC2122": //正念與生活
            case "GEC2201": //文學與創作
            case "GEC2204": //文學與電影
            case "GEC2205": //詩詞賞析
            case "GEC2206": //小說選讀
            case "GEC2207": //文學與人生
            case "GEC2208": //性別與文學
            case "GEC2210": //英語短篇小說選讀
            case "GEC2211": //英語青少年文學
            case "GEC2212": //視覺文化導論
            case "GEC2213": //表演藝術
            case "GEC2214": //音樂欣賞
            case "GEC2215": //世界音樂
            case "GEC2216": //歌劇欣賞
            case "GEC2217": //音樂與媒體
            case "GEC2218": //古典音樂賞析
            case "GEC2219": //陶藝欣賞
            case "GEC2220": //美學與鑑賞
            case "GEC2221": //藝術欣賞
            case "GEC2223": //文學欣賞
            case "GEC2227": //書篆美學
            case "GEC2228": //速寫與人生
            case "GEC2229": //音樂科技與應用
            case "GEC2230": //國際設計趨勢
            case "GEC2301": //世界文化史
            case "GEC2303": //族群與多元文化
            case "GEC2304": //史學通論
            case "GEC2307": //台灣通史
            case "GEC2308": //西洋通史
            case "GEC2309": //中國文化史
            case "GEC2310": //歷史人物分析
            case "GEC2311": //探索中國景觀
            case "GEC2312": //世界環境與人文地理
            case "GEC2313": //台灣環境與生活方式
            case "GEC2319": //德文一
            case "GEC2320": //德文二
            case "GEC2321": //台灣與海洋
            case "GEC2322": //台灣電影
            case "GEC2324": //閩南文化通論
            case "GEC2326": //台灣族群與文化
            case "GEC2330": //中國文字與文化
            case "GEC2331": //美國文化探索
            case "GEC2332": //日本文化探索
            case "GEC2335": //台灣文化概論
            case "GEC2338": //東南亞社會與文化
            case "GEC2339": //屏東學
            case "GEC2437": //語文創意表達
            case "GEC2721": //書法e動-文字的生命律動
            case "GEC2723": //西班牙語言與文化
            case "GEC2757": //文學名篇選讀：愛戀與生活[遠]
            case "GEC2756": //王陽明帶你打土匪：明朝心學的智慧發展史[遠]
            case "GEC2763": //數位輔助 YouTube 英語看世界[遠]
                if(score>=60){
                    creditSum += 2;
                    boyaCredit += 2;
                    BCCredit += 2;
                    break;
                } else {
                    break;
                }
            case "GEC2445": //屏東學磨課師
                if(score>=60){
                    creditSum += 1;
                    boyaCredit += 1;
                    BCCredit += 1;
                    break;
                } else {
                    break;
                }

            //======================================自然與科學
            case "GEC2441": //音樂與健康
            case "GEC2501": //STS導向自然科學通論
            case "GEC2502": //科技與文明發展
            case "GEC2503": //科技新知通論
            case "GEC2506": //生物科技與倫理
            case "GEC2507": //生物、醫學與健康
            case "GEC2508": //生活科技通論
            case "GEC2510": //物理科學與生活應用
            case "GEC2511": //化學與生活應用
            case "GEC2512": //數學與生活應用
            case "GEC2513": //大眾科學與傳播
            case "GEC2514": //健康促進與安全教育
            case "GEC2517": //數學史
            case "GEC2521": //數學探索
            case "GEC2524": //統計分析與生活應用
            case "GEC2528": //健康促進與休閒管理
            case "GEC2529": //音樂、感情與大腦
            case "GEC2601": //生命科學通論
            case "GEC2603": //地球科學通論
            case "GEC2604": //自然科學通論
            case "GEC2606": //科學教育通論
            case "GEC2608": //環境科學通論
            case "GEC2609": //校園環境與永續發展
            case "GEC2610": //台灣海洋環境與生態保育
            case "GEC2611": //海洋生命科學導論
            case "GEC2612": //環境化學
            case "GEC2613": //環境變遷與永續發展
            case "GEC2615": //台灣生態環境與資源保育
            case "GEC2617": //環境與生態
            case "GEC2753": //細菌與人類疾病
            case "GEC2742": //當機器人來上班-未來職場的 AI必修課
            case "GEC2743": //輕鬆學力學
            case "GEC2747": //AI精準決策與人類行為干預
            case "GEC2732": //大數據的設計思考
            case "GEC2746": //數據驅動創新實踐
            case "GEC2754": //兒童精細動作及介入策略[遠]
            case "GEC2760": //大數據：資料採集與視覺化[遠]
            case "GEC2761": //生成式AI與ChatGPT應用[遠]
            case "GEC2759": //超級英雄的物理學[遠]
                if(score>=60){
                    creditSum += 2;
                    boyaCredit += 2;
                    NTCredit += 2;
                    break;
                } else {
                    break;
                }
            case "GEC2755": //人可以貌相：臉孔處理與辨識[遠]
            case "GEC2758": //營養不能少[遠]
                if(score>=60){
                    creditSum += 1;
                    boyaCredit += 1;
                    NTCredit += 1;
                    break;
                } else {
                    break;
                }
            
            //======================================體適能
            case "GEC4211": //體育上
            case "GEC4221": //體育下
            case "GEC4207": //適應體育
                if(score>=60){
                    creditSum += 1;
                    PFCredit += 1;
                    break;
                } else {
                    break;
                }
            case "GEC4202A": //籃球
            case "GEC4202B": //排球
            case "GEC4202C": //羽球
            case "GEC4202D": //桌球
            case "GEC4202E": //網球
            case "GEC4202F": //足球
            case "GEC4202G": //撞球
            case "GEC4202H": //高爾夫
            case "GEC4202I": //慢速壘球
            case "GEC4202J": //木球
            case "GEC4202K": //法式滾球
            case "GEC4202L": //律動
            case "GEC4202M": //太極拳
            case "GEC4202N": //有氧舞蹈
            case "GEC4202O": //皮拉提斯
            case "GEC4202P": //瑜珈
            case "GEC4202Q": //水域運動
            case "GEC4202R": //直排輪
            case "GEC4202S": //帶式橄欖球
            case "GEC4202T": //體適能
            case "GEC4202U": //進階游泳
                if(score>=60){
                    creditSum += 2;
                    PFCredit += 2;
                    break;
                } else {
                    break;
                }

            //======================================= 不計入畢業學分的國防教育
            case "GEC5108":
            case "GEC5107":
            case "GEC5105":
            case "GEC5106":
            case "GEC5109":
                if(score>=60){
                    nationalDefenseCredit += 1;
                    break;
                } else {
                    break;
                }

            default:
                mistakeDetail = mistakeDetail+subjectCode+' '; 
                if(score>=60){
                    creditSum += eachCredit;
                    freeElectiveCredit += eachCredit;
                }
        }
    }
}

function showFinalCredit() {
    if(mistakeDetail != "")
        alert('使用者輸入的某些科目代號無法在《111級資工系學生手冊》上被找到，將根據使用者輸入計入自由選修學分：\n'+ mistakeDetail)

    var creditTable = document.createElement('table');
    creditTable.border = '1';
    creditTable.style.width = '100%';
    creditTable.setAttribute('id', 'creditTable');

    var PFCreditDenominator = (PFCredit>=4)? "4": "2~4";
    var boyaCreditDenominator = (boyaCredit>=14)? "14": "12~14";

    if(boyaCredit+PFCredit)

    var tableContent = `
    <table border="1" id="creditTable" style="width: 100%;">
        <tbody>
            <tr>
                <td colspan="3">總學分</td>
                <td><span style="color: blue;">${creditSum}</span></td>
            </tr>
            <tr>
                <td rowspan="2">資工系</td>
                <td colspan="2">系必修</td>
                <td><span style="color: blue;">${compulsoryCredit}</span> / 70</td>
            </tr>
            <tr>
                <td colspan="2">系選修</td>
                <td><span style="color: blue;">${electiveCredit}</span> / 30</td>
            </tr>
            <tr>
                <td rowspan="5">通識教育: <span style="color: blue;">${generalCredit+PFCredit+boyaCredit}</span> / 28</td>
                <td colspan="2">共同教育</td>
                <td><span style="color: blue;">${generalCredit}</span> / 10</td>
            </tr>
            <tr>
                <td colspan="2">體適能</td>
                <td><span style="color: blue;">${PFCredit}</span> / ${PFCreditDenominator} </td>
            </tr>
            <tr>
                <td rowspan="3">博雅教育: <span style="color: blue;">${boyaCredit}</span> / ${boyaCreditDenominator}</td>
                <td>美學與文化</td>
                <td style="color: blue;">${BCCredit}</td>
            </tr>
            <tr>
                <td>公民與社會</td>
                <td style="color: blue;">${SSCredit}</td>
            </tr>
            <tr>
                <td>自然與科技</td>
                <td style="color: blue;">${NTCredit}</td>
            </tr>
            <tr>
                <td colspan="3">自由選修(即非本系課程)</td>
                <td><span style="color: blue;">${freeElectiveCredit}</span></td>
            </tr>
            <tr>
                <td colspan="3">國防教育(<span style='color: red;'>學分不計入最低畢業門檻與通識學分</span>)</td>
                <td style="color: blue;">${nationalDefenseCredit}</td>
            </tr>
        </tbody>
    </table>`;

    //畢業條件：
    var pass = "<span style='color: green;'>通過</span>";
    // var pass = "✅";
    var fail = "<span style='color: red;'>未達</span>";
    // var fail = "❌";
    var creditSumCondition = (parseInt(creditSum) >= 128)? pass: fail; //1 總學分數：>=128
    var compulsoryCreditCondition = (parseInt(compulsoryCredit) >= 70)? pass: fail;//2 必修學分數 70
    var electiveCreditCondition = (parseInt(electiveCredit) >= 10)? pass: fail;//3 系選修學分數 >= 10
    var electiveCreditSumCondition = (parseInt(electiveCredit+freeElectiveCredit) >= 30)? pass: fail;//3 所有選修學分數 >= 10
    var generalCreditCondition = (parseInt(generalCredit+PFCredit+boyaCredit) >= 28)? pass: fail;//4 通識學分數 28
    var boyaCreditCondition = ((parseInt(BCCredit)>0)&&(parseInt(SSCredit)>0)&&(parseInt(NTCredit)>0))? pass: fail;
    var boyaAndPECreditCondition = (parseInt(boyaCredit)+parseInt(PFCredit)>=16)? pass: fail;
    var cross_School_ElectiveCreditCondition = (parseInt(freeElectiveCredit)>=2)? pass: fail;
    
    var graduateCondition = `
        <tr>
            <td><b>畢業條件</b></td>
            <td><b>實際狀況</b></td>
            <td><b>判定結果</b></td>
        </tr>
        <tr>
            <td>總學分至少128</td>
            <td><span style='color: blue;'>${creditSum}</span></td>
            <td class="condition-status">${creditSumCondition}</td>
        </tr>
        <tr>
            <td>系必修學分修滿70學分</td>
            <td><span style='color: blue;'>${compulsoryCredit}</span></td>
            <td class="condition-status">${compulsoryCreditCondition}</td>
        </tr>
        <tr>
            <td><span style='color: red;'>系選修</span>至少10學分</td>
            <td><span style='color: blue;'>${electiveCredit}</span></td>
            <td class="condition-status">${electiveCreditCondition}</td>
        </tr>
        <tr>
            <td><span style='color: red;'>選修(含非本系自由選修)</span>學分加總至少30學分</td> 
            <td><span style='color: blue;'>${electiveCredit+freeElectiveCredit}</span></td>
            <td class="condition-status">${electiveCreditSumCondition}</td>
        </tr>
        <tr>
            <td>通識學分至少28學分</td>
            <td><span style='color: blue;'>${parseInt(generalCredit+PFCredit+boyaCredit)}</span></td>
            <td class="condition-status">${generalCreditCondition}</td>
        </tr>
        <tr>
            <td><span style='color: red;'>跨院選修學分至少2學分</span>(參考第6點)</td>
            <td><span style='color: blue;'>${parseInt(freeElectiveCredit)}</span></td>
            <td class="condition-status">${cross_School_ElectiveCreditCondition}</td>
        </tr>
        <tr>
            <td>博雅教育與體適能總和至少修習16學分</td>
            <td><span style='color: blue;'>${parseInt(boyaCredit)+parseInt(PFCredit)}</span></td>
            <td class="condition-status">${boyaAndPECreditCondition}</td>
        </tr>
        <tr>
            <td colspan="2">博雅教育中每一類課程至少修習2學分</td>
            <td class="condition-status">${boyaCreditCondition}</td>
        </tr>
        <tr>
            <td colspan="2">專業證照採認點數至少4點</td>
            <td class="condition-status">--</td>
        </tr>
        <tr>
            <td colspan="2">參與講座並取得20條研習條</td>
            <td class="condition-status">--</td>
        </tr>
        `;

    // tableContent += graduateCondition;
    var graduateConditionList = document.createElement('table');
    graduateConditionList.className = 'condition-list';
    graduateConditionList.innerHTML = graduateCondition;
    graduateConditionList.setAttribute('border', '1');
    graduateConditionList.setAttribute('id', 'creditTable');
    graduateConditionList.setAttribute('style', 'width: 100%;');

    creditTable.innerHTML = tableContent;

    var inputList = document.querySelector('.inputList');
    inputList.appendChild(creditTable);

    var inputList = document.querySelector('.inputList');
    inputList.appendChild(graduateConditionList);

    var clearButton = document.createElement('button');
    clearButton.textContent = '清空';
    clearButton.onclick = function() {
        location.reload();
    };

    var exportButton = document.createElement('button');
    exportButton.textContent = '匯出Excel';
    exportButton.onclick = function() {
        exportToExcel()
    };

    inputList.appendChild(clearButton);
    inputList.appendChild(exportButton);
}




function processCredit(){
    var userInput = document.getElementById('userInput').value;
    var inputLines =  userInput.split('\n');
    for(var i=0; i<inputLines.length; i++){
        var array = inputLines[i].split(/\s+/);
        if(array[4]=="抵修") {
            array[4] = 60; //代換“抵修”為“60”分
            if((array[1]=="GEC1212")||(array[1]=="GEC1222")){
                array[5] = "通識";
            }
        }
        if (isNaN(array[4])) {
            array[5] = array[4];
            array[4] = 0; //代換成0分
        }
        if (array[2] == "Android") { // 中間有空格的科目名稱：Android APP軟體設計(上）
            array[2] += array[3];
            array[3] = array[4];
            array[4] = array[5];
            array[5] = array[6];
        }
        if(array[1].includes("BFB")){
            continue;
        }
        if(array[5]=="資訊工程學系") array[5] = "資工系"; //簡化系級名稱
        var dataDetail = {
            semester: array[0], //修課學期
            subjectCode: array[1], //科目編號
            subject: array[2], //修課科目
            credits: parseInt(array[3]), //該科目佔有學分
            score: parseInt(array[4]), //該科目的學期成績
            courseType: array[5] //判斷是通識課還是系上的課程
        }
        creditDetail.push(dataDetail);
    }
    showInput();
    var userInput = document.getElementById('userInput');
    userInput.readOnly = true; //唯讀文字欄
    var processButton = document.getElementById('processButton');
    processButton.disabled = true; //禁用開始分析按鈕
    processButton.style.display = 'none';
    var clearButton = document.getElementById('clearButton');
    clearButton.disabled = true; //禁用清空輸入欄按鈕
    clearButton.style.display = 'none';
    var importTemplateButton = document.getElementById('importTemplateButton');
    importTemplateButton.disabled = true; //禁用導入模板按鈕
    importTemplateButton.style.display = 'none';
}

function showInput() {
    var inputList = document.querySelector('.inputList');
    var checkInput = document.querySelector('.checkInput');
    checkInput.textContent = "根據使用者輸入的內容，請確認以下資訊是否正確；若需要修改所輸入的成績，請直接在下方表格中修改。";

    // 創建表格元素
    var table = document.createElement('table');
    table.border = '1'; // 設定表格邊框
    table.style.width = '100%';
    table.setAttribute('id', 'checkInput');

    // 創建表頭
    var tableHeader = document.createElement('tr');
    tableHeader.innerHTML = '<th>序號</th><th>學期</th><th>科目編號</th><th>科目名稱</th><th>學分數</th><th>成績</th><th>開課單位</th>';
    table.appendChild(tableHeader);

    // 依次添加資料
    for (var i = 0; i < creditDetail.length; i++) {
        var row = document.createElement('tr');

        row.addEventListener('mouseenter', function() {//產生hover效果
            this.style.backgroundColor = 'lightgray'; 
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = ''; 
        });

        var rowData = creditDetail[i];

        // 添加序號
        var indexCell = document.createElement('td');
        indexCell.textContent = i + 1;
        row.appendChild(indexCell);

        // 添加其他欄位
        var fields = ['semester', 'subjectCode', 'subject', 'credits', 'score', 'courseType'];
        for (var j = 0; j < fields.length; j++) {
            var cell = document.createElement('td');
            if (fields[j] === 'score') {
                var input = document.createElement('input');
                input.type = 'text';
                input.size = 3;
                input.value = rowData[fields[j]]; // Set initial value from the data
                if(creditDetail[i].score>=60){
                    input.style.color = 'blue';
                } else {
                    input.style.color = 'red';
                }
                

                (function(currentIndex) {
                    input.addEventListener('input', function(event) {
                        var newScore = parseInt(event.target.value, 10);
                        creditDetail[currentIndex].score = newScore;
                    });
                })(i);

                cell.appendChild(input);
            } else {
                cell.textContent = rowData[fields[j]];
            }
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    inputList.appendChild(table);

    var calculateBtn = document.createElement('button');
    var restartBtn = document.createElement('button');
    calculateBtn.textContent = '繼續';
    calculateBtn.style.backgroundColor = "#01814A";
    restartBtn.textContent = '重新開始';

    restartBtn.onclick = function() {
        location.reload();
    };

    calculateBtn.onclick = function() {
        calculateCredit();
        showFinalCredit();
        calculateBtn.style.display = 'none';
        restartBtn.style.display = 'none';
    };

    inputList.appendChild(restartBtn);
    inputList.appendChild(calculateBtn);
    

}

function exportToExcel() {
    // 提取所有 input 标签的值并更新表格内容
    const inputs = document.querySelectorAll("#checkInput input[type='text']");
    inputs.forEach(input => {
        const cell = input.parentElement;
        cell.innerText = input.value;
    });

    const wb = XLSX.utils.book_new();
  
    // 假設有兩個表格，checkInput 和 creditTable
    const checkInputTable = document.getElementById("checkInput");
    const creditTable = document.getElementById("creditTable");
  
    const checkInputWS = XLSX.utils.table_to_sheet(checkInputTable);
    const creditTableWS = XLSX.utils.table_to_sheet(creditTable);
  
    XLSX.utils.book_append_sheet(wb, checkInputWS, "Check Input");
    XLSX.utils.book_append_sheet(wb, creditTableWS, "Credit Table");
  
    const currentDate = new Date();
    const dateString = currentDate.toISOString().slice(0, 19).replace(/[-:T]/g, "");
    const filename = `學分計算_${dateString}.xlsx`;
  
    // 將工作簿寫入檔案並下載
    XLSX.writeFile(wb, filename);
}


function clearTextarea(){  //清空文字欄
    var textareaContent = document.getElementById('userInput');
    textareaContent.value = "";
}

function importTemplate(){ //於文字欄導入模板
    var textareaContent = document.getElementById('userInput');
    textareaContent.value = `111/1    GEC1212 基礎學術英文(上)    2    抵修
111/1    GEC1222 基礎學術英文(下)    2    抵修
111/1    GEC1111 國文(上)    2    60    通識
111/1    GEC4211 體育(上)    1    60    通識
111/1    GEC2211 英語青少年文學    2    60    通識
111/1    GEC2753 細菌與人類疾病    2    60    通識
111/1    BFCZ002 程式設計(一)    3    60    資訊工程學系
111/1    BFCZ004 計算機概論    3    60    資訊工程學系
111/1    BFCZ005 線性代數    3    60    資訊工程學系
111/1    BFCZ170 微積分(一)    3    60    資訊工程學系
111/1    BFCZ100 網頁設計與應用    3    60    資訊工程學系
111/1    BFCZ136 RFID概論    3    60    資訊工程學系
111/2    GEC1121 國文(下)    2    60    通識
111/2    GEC4221 體育(下)    1    60    通識
111/2    GEC2109 生死學通論    2    60    通識
111/2    BFCZ006 程式設計(二)    3    60    資訊工程學系
111/2    BFCZ028 基本電學    3    60    資訊工程學系
111/2    BFCZ035 計算機網路    3    60    資訊工程學系
111/2    BFCZ171 微積分(二)    3    60    資訊工程學系
111/2    BFCZ172 數位系統導論暨實習    4    60    資訊工程學系
111/2    BFCZ137 Linux實務導論    3    60    資訊工程學系
112/1    GEC4202C 體育-羽球    2    60    通識
112/1    GEC2438 全球化與兩岸關係    2    60    通識
112/1    GEC2524 統計分析與生活應用    2    60    通識
112/1    BFCZ012 系統程式    3    60    資訊工程學系
112/1    BFCZ013 資料結構    3    60    資訊工程學系
112/1    BFCZ017 計算機組織    3    60    資訊工程學系
112/1    BFCZ037 電子電路概論    3    60    資訊工程學系
112/1    BFCZ038 電子電路實習    1    60    資訊工程學系
112/1    BFCZ052 視窗程式設計    3    60    資訊工程學系
112/1    BFCZ101 科技英文(一)    3    60    資訊工程學系
112/2	GEC1233 資訊英文	2	60	通識	
112/2	GEC2724 創意學經濟	2	60	通識	
112/2	GEC2738 當代應用心理學	2	60	通識	
112/2	BFCZ009 離散數學	3	60	資訊工程學系	
112/2	BFCZ011 組合語言與微處理機	3	60	資訊工程學系	
112/2	BFCZ036 資料庫系統導論	3	60	資訊工程學系	
112/2	BFCZ040 物件導向程式設計	3	60	資訊工程學系	
112/2	BFCZ104 科技英文(二)	3	60	資訊工程學系	
112/2	GEC5109 全民國防教育軍事訓練-國際情勢	1	60	通識
112/2	DGCZ046 第二外國語:西班牙文(二)	2	60	應用英文系
113/1	BFCZ015 機率與統計	3	60	資訊工程學系	
113/1	BFCZ030 微處理機實習	1	60	資訊工程學系	
113/1	BFCZ155 軟體工程	3	60	資訊工程學系	
113/1	BFCZ059 影像處理導論	3	60	資訊工程學系	
113/1	BFCZ090 資訊安全	3	60	資訊工程學系	
113/1	BFCZ166 Android APP軟體設計(上)	3	60	資訊工程學系	
113/1	BFCZ177 人工智慧程式設計	3	60	資訊工程學系`;
}