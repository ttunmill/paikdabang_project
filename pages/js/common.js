$(document).ready(function() {
    // 헤더를 로드하고 완료된 후에 실행될 함수
    $("#header").load("../../common/header.html", function() {
        hideSub();
        
    });

    // 푸터를 로드하고 완료된 후에 실행될 함수
    $("#footer").load("../../common/footer.html", function() {
        topBtn();
    });

    function hideSub() {
        $(".sub").hide();
    }

    function topBtn() {
        // top버튼
        const top_btn = document.querySelector(".top_btn a")
        const top_btn_off = document.querySelector(".top_btn a img")
        top_btn.addEventListener("mouseover", () => {
            top_btn_off.src = "../images/on.png"
        })
        top_btn.addEventListener("mouseout", () => {
            top_btn_off.src = "../images/off.png"
        })
        
        top_btn.addEventListener("click", (e) => {
            e.preventDefault();
            scrollTo(0, 0)
        })
    }
});

// 방법2
// $(document).ready(function() {
//     // 헤더를 로드하고 완료된 후에 실행될 함수
//     $("#header").load("../../common/header.html", function() {
//         // 헤더가 로드된 후 실행할 코드들
//         load_script();
//     });

//     // 푸터를 로드하고 완료된 후에 실행될 함수
//     $("#footer").load("../../common/footer.html");

//     function load_script() {
//         // 추가적인 JavaScript 파일을 동적으로 추가하는 예시
//         var script = document.createElement('script');
//         script.src = '../../common/header.js';
//         document.body.appendChild(script);
//     }
// });

// 방법3
// $(document).ready(function() {
//     // 헤더를 로드하고 완료된 후에 실행될 함수
//     $("#header").load("../../common/header.html", function() {
//         // 헤더가 로드된 후 실행할 코드들
//         loadScript('../../common/header.js');
//     });

//     // 푸터를 로드하고 완료된 후에 실행될 함수
//     $("#footer").load("../../common/footer.html");

//     function loadScript(scriptPath) {
//         var script = document.createElement('script');
//         script.src = scriptPath;
//         document.body.appendChild(script);
//     }
// });