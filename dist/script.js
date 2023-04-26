window.addEventListener("load", function (){
    // 構想:
        // 滑鼠移入後RotateStartTime記錄時間
        // 滑鼠點擊時RotateClickTime記錄時間
        // 通過兩者計算出目前角度來判斷下方人物誰要放大
    // 缺點:
        // 此方法不是切割圓盤，實際上就是每人有0.6秒的時間
        // 在此段時間圓盤被點就是那個人，因此滑鼠追到圓盤邊邊點擊還是現時間段那人

    // 宣告兩個全局變數
    let RotateStartTime ;
    let RotateClickTime;

    // 獲取圓盤以及其陰影對象
    const shadow = document.getElementById("shadowid");
    const disc = document.getElementById("discid");

    //獲取圓盤外部容器對象
    const DiscWrapper = document.getElementById("DiscWrapperId");

    // 鼠標移入事件，將整個disc容器往下移動
    shadow.addEventListener("mouseenter", (event) => {
        // 將盤子容器下移達到圓盤與陰影下移的目的
        DiscWrapper.style.marginTop = "-35vw";

        // disc添加旋轉class使其旋轉
        disc.classList.add("rotate");
        // 陰影添加鼠鏢變化樣式(因為陰影在圓盤上，一定要添加給陰影)
        shadow.classList.add("CursorChange");
        // 紀錄開始旋轉的時間
        let timer = new Date();
        RotateStartTime = timer.getTime();
        // console.log(RotateStartTime);
    });


    // 鼠標移出事件，將整個disc容器往上移動回原本位置
    shadow.addEventListener("mouseleave", (event) => {
        // 回復圓盤容器位置
        DiscWrapper.style.marginTop = "-42vw";
        // disc移除旋轉動畫
        disc.classList.remove("rotate");
        // 陰影移除鼠鏢變化樣式
        shadow.classList.remove("CursorChange");
    });
    shadow.addEventListener("click",(event)=>{
        // 紀錄點擊時間
        let timer = new Date();
        RotateClickTime = timer.getTime();
        // 3600豪秒轉360度，1豪秒轉0.1度
        let degree = (RotateClickTime-RotateStartTime) % 3600 ;
        // 測試用
        console.log(degree);

        // 判斷目前是誰的事件
        if ((degree>=0 && degree<300) || (degree>=3300 && degree<=3590)){
            // 許姵柔被點擊
            remove_people();
            people6_event();
            console.log("許姵柔");
        }
        else if ((degree>=301 && degree<900)){
            // 楊逸泉被點擊
            remove_people();
            people1_event();
            console.log("楊逸泉");
        }
        else if ((degree>=901 && degree<1500)){
            // 林羽宸被點擊
            remove_people();
            people2_event();
            console.log("林羽宸");
        }
        else if ((degree>=1501 && degree<2100)){
            // 張育榮被點擊
            remove_people();
            people3_event();
            console.log("張育榮");
        }
        else if ((degree>=2101 && degree<2700)){
            // 宋羽淇被點擊
            remove_people();
            people4_event();
            console.log("宋羽淇");
        }
        else if ((degree>=2701 && degree<3300)){
            // 陳信嘉被點擊
            remove_people();
            people5_event();
            console.log("陳信嘉");
        }
    })
    
    const cancel = document.getElementById("cancel");

    const people1 = document.getElementById("people1");
    const people1_photo = document.getElementById("people1-photo");
    const people1_name = document.getElementById("people1-name");
    const people1_blank = document.getElementById("people1-blank");
    const people1_info1 = document.getElementById("people1-info1");
    const people1_info2 = document.getElementById("people1-info2");

    const people2 = document.getElementById("people2");
    const people2_photo = document.getElementById("people2-photo");
    const people2_name = document.getElementById("people2-name");
    const people2_blank = document.getElementById("people2-blank");
    const people2_info1 = document.getElementById("people2-info1");
    const people2_info2 = document.getElementById("people2-info2");

    const people3 = document.getElementById("people3");
    const people3_photo = document.getElementById("people3-photo");
    const people3_name = document.getElementById("people3-name");
    const people3_blank = document.getElementById("people3-blank");
    const people3_info1 = document.getElementById("people3-info1");
    const people3_info2 = document.getElementById("people3-info2");

    const people4 = document.getElementById("people4");
    const people4_photo = document.getElementById("people4-photo");
    const people4_name = document.getElementById("people4-name");
    const people4_blank = document.getElementById("people4-blank");
    const people4_info1 = document.getElementById("people4-info1");
    const people4_info2 = document.getElementById("people4-info2");

    const people5 = document.getElementById("people5");
    const people5_photo = document.getElementById("people5-photo");
    const people5_name = document.getElementById("people5-name");
    const people5_blank = document.getElementById("people5-blank");
    const people5_info1 = document.getElementById("people5-info1");
    const people5_info2 = document.getElementById("people5-info2");

    const people6 = document.getElementById("people6");
    const people6_photo = document.getElementById("people6-photo");
    const people6_name = document.getElementById("people6-name");
    const people6_blank = document.getElementById("people6-blank");
    const people6_info1 = document.getElementById("people6-info1");
    const people6_info2 = document.getElementById("people6-info2");

    

    

    function remove_people(){
        people1_photo.classList.remove("boy_photo_change");
        people1_name.classList.remove("boy_name_change");
        people1_blank.classList.remove("boy_blank_change");
        people1_info1.classList.remove("boy_info1_change");
        people1_info2.classList.remove("boy_info2_change");

        people2_photo.classList.remove("girl_photo_change");
        people2_name.classList.remove("girl_name_change");
        people2_blank.classList.remove("girl_blank_change");
        people2_info1.classList.remove("girl_info1_change");
        people2_info2.classList.remove("girl_info2_change");

        people3_photo.classList.remove("boy_photo_change");
        people3_name.classList.remove("boy_name_change");
        people3_blank.classList.remove("boy_blank_change");
        people3_info1.classList.remove("boy_info1_change");
        people3_info2.classList.remove("boy_info2_change");

        people4_photo.classList.remove("girl_photo_change");
        people4_name.classList.remove("girl_name_change");
        people4_blank.classList.remove("girl_blank_change");
        people4_info1.classList.remove("girl_info1_change");
        people4_info2.classList.remove("girl_info2_change");

        people5_photo.classList.remove("boy_photo_change");
        people5_name.classList.remove("boy_name_change");
        people5_blank.classList.remove("boy_blank_change");
        people5_info1.classList.remove("boy_info1_change");
        people5_info2.classList.remove("boy_info2_change");

        people6_photo.classList.remove("girl_photo_change");
        people6_name.classList.remove("girl_name_change");
        people6_blank.classList.remove("girl_blank_change");
        people6_info1.classList.remove("girl_info1_change");
        people6_info2.classList.remove("girl_info2_change");
        console.log("叉叉被點了");
    }

    cancel.addEventListener("click",(event)=>{
        //點叉叉移除動畫的class
        document.getElementById("cancel-wrapper").style.visibility = "hidden";
        remove_people();
    })




    //定義增加動畫的函數1
    function people1_event(){
        remove_people();
        document.getElementById("cancel-wrapper").style.visibility = "visible";
        people1_photo.classList.add("boy_photo_change");
        people1_name.classList.add("boy_name_change");
        people1_blank.classList.add("boy_blank_change");
        people1_info1.classList.add("boy_info1_change");
        people1_info2.classList.add("boy_info2_change");
    }
    people1.addEventListener("click",(event)=>{
        //加入動畫class
        people1_event();
        console.log("楊逸泉被點了");
    })


     //定義增加動畫的函數2
     function people2_event(){
        remove_people();
        document.getElementById("cancel-wrapper").style.visibility = "visible";
        people2_photo.classList.add("girl_photo_change");
        people2_name.classList.add("girl_name_change");
        people2_blank.classList.add("girl_blank_change");
        people2_info1.classList.add("girl_info1_change");
        people2_info2.classList.add("girl_info2_change");
    }
    people2.addEventListener("click",(event)=>{
        //加入動畫class
        people2_event();
        console.log("林羽宸被點了");
    })   


    //定義增加動畫的函數3
    function people3_event(){
        remove_people();
        document.getElementById("cancel-wrapper").style.visibility = "visible";
        people3_photo.classList.add("boy_photo_change");
        people3_name.classList.add("boy_name_change");
        people3_blank.classList.add("boy_blank_change");
        people3_info1.classList.add("boy_info1_change");
        people3_info2.classList.add("boy_info2_change");
    }
    people3.addEventListener("click",(event)=>{
        //加入動畫class
        people3_event();
        console.log("張育榮被點了");
    })

    //定義增加動畫的函數4
    function people4_event(){
        remove_people();
        document.getElementById("cancel-wrapper").style.visibility = "visible";
        people4_photo.classList.add("girl_photo_change");
        people4_name.classList.add("girl_name_change");
        people4_blank.classList.add("girl_blank_change");
        people4_info1.classList.add("girl_info1_change");
        people4_info2.classList.add("girl_info2_change");
    }
    people4.addEventListener("click",(event)=>{
        //加入動畫class
        people4_event();
        console.log("宋羽淇被點了");
    })

    //定義增加動畫的函數5
    function people5_event(){
        remove_people();
        document.getElementById("cancel-wrapper").style.visibility = "visible";
        people5_photo.classList.add("boy_photo_change");
        people5_name.classList.add("boy_name_change");
        people5_blank.classList.add("boy_blank_change");
        people5_info1.classList.add("boy_info1_change");
        people5_info2.classList.add("boy_info2_change");
    }
    people5.addEventListener("click",(event)=>{
        //加入動畫class
        people5_event();
        console.log("陳信嘉被點了");
    })

    //定義增加動畫的函數6
    function people6_event(){
        remove_people();
        document.getElementById("cancel-wrapper").style.visibility = "visible";
        people6_photo.classList.add("girl_photo_change");
        people6_name.classList.add("girl_name_change");
        people6_blank.classList.add("girl_blank_change");
        people6_info1.classList.add("girl_info1_change");
        people6_info2.classList.add("girl_info2_change");
    }
    people6.addEventListener("click",(event)=>{
        //加入動畫class
        people6_event();
        console.log("許姵柔被點了");
    })



})
