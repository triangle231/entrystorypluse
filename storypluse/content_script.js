const links = document.getElementsByTagName("a");
console.log(links)
id = 0
window.addEventListener('load', function() {
  view()
});

//setInterval(function() {
//    const links = document.getElementsByTagName("a");
//    for (let i = 0; i < links.length; i++) {
//      if (links[i].href.startsWith("https://playentry.org/project/")) {
//        if (links[i].getAttribute('data-iframe-loaded') === null) {
//          if (!links[i].href.startsWith("https://playentry.org/project/list/")) {
//            id = id + 1
//            links[i].textContent = '들어가기';
//            const link = links[i].href.replace("https://playentry.org/project/", '');
//            const img = 'https://playentry.org/uploads/thumb/' + link.charAt(0) + link.charAt(1) + link.charAt(2) + link.charAt(3) + '/' + link;
//            links[i].innerHTML += '<br><iframe width="640" height="420" src="' + links[i].href.replace('/project/', '/iframe/') + '" frameborder="0"></iframe><br>'
//            links[i].setAttribute('data-iframe-loaded', 'true');
//          }
//        }
//      }
//      if (links[i].textContent.startsWith("https://www.youtube.com/watch?v=")) {
//        if (links[i].getAttribute('data-iframe-loaded2') === null) {
//          links[i].href = links[i].textContent;
//          links[i].textContent = "들어가기";
//          links[i].innerHTML += '<br><iframe width="640" height="420" src="' + links[i].href.replace("watch?v=", "embed/") + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>'
//          links[i].setAttribute('data-iframe-loaded2', 'true');
//        }
//      }
//      if (links[i].textContent.startsWith("https://playentry.org/uploads/")) {
//        if (links[i].getAttribute('data-iframe-loaded3') === null) {
//          links[i].textContent = '';
//          links[i].innerHTML += '<br><img src="' + links[i].href + '"></img><br>'
//          links[i].setAttribute('data-iframe-loaded3', 'true');
//        }
//      }
//    }
//}, 500);

setInterval(function() {
  view()
}, 500);

function view() {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].href = links[i].textContent;
    if (links[i].href.startsWith("https://playentry.org/project/")) {
      if (links[i].getAttribute('data-iframe-loaded') === null) {
        if (!links[i].href.startsWith("https://playentry.org/project/list/")) {
          id = id + 1
          links[i].textContent = '들어가기';
          const link = links[i].href.replace("https://playentry.org/project/", '');
          const img = 'https://playentry.org/uploads/thumb/' + link.charAt(0) + link.charAt(1) + link.charAt(2) + link.charAt(3) + '/' + link;
          links[i].innerHTML += '<br><iframe width="640" height="420" src="' + links[i].href.replace('/project/', '/iframe/') + '" frameborder="0"></iframe><br>'
          links[i].setAttribute('data-iframe-loaded', 'true');
        }
      }
    }
    if (links[i].href.startsWith("https://www.youtube.com/watch?v=")) {
      if (links[i].getAttribute('data-iframe-loaded2') === null) {
        links[i].textContent = "들어가기";
        links[i].innerHTML += '<br><iframe width="640" height="420" src="' + links[i].href.replace("watch?v=", "embed/") + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>'
        links[i].setAttribute('data-iframe-loaded2', 'true');
      }
    }
    if (links[i].textContent.startsWith("https://playentry.org/uploads/")) {
      if (links[i].getAttribute('data-iframe-loaded3') === null) {
        links[i].textContent = '';
        links[i].innerHTML += '<br><img src="' + links[i].href + '"></img><br>'
        links[i].setAttribute('data-iframe-loaded3', 'true');
      }
    }
  }
}

function onClick() {
  // 모든 a 태그 가져오기
  const links = document.querySelectorAll('a');

  // "신고하기" 텍스트가 포함된 a 태그 찾기
  for (let i = 0; i < links.length; i++) {
    if (links[i].textContent === '신고하기') {
      // "가리기"라는 텍스트를 가진 a 태그 생성 및 클릭 이벤트 추가
      const hideLink = document.createElement('a');
      hideLink.innerHTML = '릭롤링!!';
      hideLink.onclick = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

        hideLink.remove(); // "가리기" 태그 삭제
      };

      // "신고하기" 태그 바로 아래에 "가리기" 태그를 추가
      links[i].parentNode.insertBefore(hideLink, links[i].nextSibling);

      // 가리기 태그의 4개 상위 div 태그 찾기
      let parent = hideLink.parentNode;
      for (let j = 0; j < 4; j++) {
        if (parent.tagName === 'DIV') {
          console.log(parent.className);
        }
        parent = parent.parentNode;
      }
      
      // 과정을 콘솔에 출력
      console.log('마우스 클릭 이벤트 발생!');
    } else if (links[i].textContent === '릭롤링!!') { // "가리기" 텍스트가 포함된 a 태그 찾기
      links[i].remove(); // 해당 태그 삭제
    }
  }
}

document.addEventListener('click', onClick);