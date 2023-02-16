const tableRow = (rank, title, poster, description, link) => (`
  <tr>
    <td>${rank}</td>
    <td>${title}</td>
    <td><img src='${poster}' style='width:100%' /></td>
    <td>${description}</td>
    <td><a href='${link}' target='_blank'>클릭</a></td>
  </tr>
`
)

const movies = [
  {
    rank: 1,
    title: '스파이더맨 2',
    poster: 'https://movie-phinf.pstatic.net/20111221_70/1324478109601zX4NB_JPEG/movie_image.jpg',
    description:
      `전세계가 기다려온 영웅이 돌아온다! 스파이더맨이 돌아온다. 우연한 사고로 특별한 능력을 갖게된 피터 파커(토비 맥과이어)는 대학생과
슈퍼 히어로의 신분을 오가며 짜릿한 생활을 하지만 사랑 하는 메리 제인(커스틴 던스트)에게조차 자신의 마음을 열 수 없는 현실은 그들을 안타까운 로맨스로 이끈다.
한편 스파이더맨에게 아버지를 잃고 복수심에 불타는 피터의 친구 해리가 연구 중 폭발로 기계촉수와 엄청난 파워를 갖게된 닥터 옥토퍼스에게 뿌리치지 못할 제안을 하면서
스파이더맨의 운명은 점차 예측불가능한 상황으로 전개되는데...`,
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=35071'
  },
  {
    rank: 2,
    title: '스파이더맨 3',
    poster: 'https://movie-phinf.pstatic.net/20111222_57/1324549190254rUlAm_JPEG/movie_image.jpg',
    description:
      `스파이더맨 Vs 스파이더맨, 어둠이 될 것인가, 어둠에 맞설 것인가!
대중의 사랑을 듬뿍 받으며 진정한 영웅으로 거듭난 스파이더맨, 피터 파커(토비 맥과이어). 어느 날, 스파이더맨은 외계에서 온 수수께끼의 유기체인 심비오트(Symbiote)에 감염되고 스파이더맨은 오리지날 스파이더맨에서 블랙 슈트 스파이더맨으로 변화한다. 한층 업그레이드 되고 강력해진 파워를 얻게 된 스파이더맨은 자신의 힘에 도취되어 마음껏 세상을 즐긴다. 아버지의 복수를 위해 '뉴 고블린(제임스 프랑코)'이 된 해리와 물리 실험에 노출되어 능력을 얻게 된 피터의 삼촌을 죽인 진범 '샌드맨(토마스 헤이든 처치)'은 호시탐탐 스파이더맨을 노리는데...
한편, 피터의 삶에서도 변화의 조짐이 보인다. 직장 동료인 에디 브록(토퍼 그레이스)이 스파이더맨을 쫒아다니며 연신 특종을 잡아 신문사의 영웅으로 떠오르며 그를 위협한 것. 하지만 브록은 스파이더맨이 자신의 여자친구 그웬(브라이스 달라스 하워드)을 위험에서 구해준 후, 그녀의 관심이 온통 그에게 쏠리자 스파이더맨에게 증오의 감정을 갖게 된다. 그리고 그가 벗어 던진 심비오트가 브록에게 전이되어 가장 강력한 악당인 '베놈'으로 진화한다. 상상을 초월하는 힘을 지니게 된 스파이더맨과 그를 노리는 뉴 고블린, 샌드맨, 베놈과의 피할 수 없는 사상 최대의 대결이 시작된다!`,
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=43157'
  },
  {
    rank: 3,
    title: '스파이더맨',
    poster: 'https://movie-phinf.pstatic.net/20111223_203/1324572168314z7jFI_JPEG/movie_image.jpg',
    description:
      `세상의 파워를 지배하는 남자, 기다렸던 그 영웅을 이제야 만난다.
평범하고 내성적인 학생 피터 파커, 그는 우연히 유전자가 조작된 슈퍼거미에 물린다.
그 후, 피터는 손에서 거미줄이 튀어 나오고 벽을 기어 오를 수 있는 거미와 같은 능력을 갖게 된다.
다가오는 위험을 본능적으로 감지하는 초감각과 엄청난 파워까지. 피터는 짝사랑하던 '메리 제인'의 관심을 끌기 위해 멋진 스포츠카를 구입하는데 초능력을 처음 사용한다.
그러다 사랑하는 벤 아저씨의 죽음을 계기로 엄청난 파워에는 그만큼의 책임이 동반된다는 사실을`,
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=31307'
  },
  {
    rank: 4,
    title: '조커',
    poster: 'https://movie-phinf.pstatic.net/20190906_128/1567761736426S6Fje_JPEG/movie_image.jpg',
    description:
      `“내 인생이 비극인줄 알았는데, 코미디였어”
고담시의 광대 아서 플렉은 코미디언을 꿈꾸는 남자.
하지만 모두가 미쳐가는 코미디 같은 세상에서
맨 정신으로는 그가 설 자리가 없음을 깨닫게 되는데…
이제껏 본 적 없는 진짜 ‘조커’를 만나라!`,
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=167613'
  },
  {
    rank: 5,
    title: '어바웃 타임',
    poster: 'https://movie-phinf.pstatic.net/20131115_243/1384498185621awKv1_JPEG/movie_image.jpg',
    description:
      `모태솔로 팀(돔놀 글리슨)은 성인이 된 날, 아버지(빌 나이)로부터 놀랄만한 가문의 비밀을 듣게 된다.
바로 시간을 되돌릴 수 있는 능력이 있다는 것!
그것이 비록 히틀러를 죽이거나 여신과 뜨거운 사랑을 할 수는 없지만,
여자친구는 만들어 줄 순 있으리..

꿈을 위해 런던으로 간 팀은 우연히 만난 사랑스러운 여인 메리에게 첫눈에 반하게 된다.
그녀의 사랑을 얻기 위해 자신의 특별한 능력을 마음껏 발휘하는 팀.
어설픈 대시, 어색한 웃음은 리와인드! 뜨거웠던 밤은 더욱 뜨겁게 리플레이!
꿈에 그리던 그녀와 매일매일 최고의 순간을 보낸다.

하지만 그와 그녀의 사랑이 완벽해질수록 팀을 둘러싼 주변 상황들은 미묘하게 엇갈리고,
예상치 못한 사건들이 여기저기 나타나기 시작하는데…

어떠한 순간을 다시 살게 된다면, 과연 완벽한 사랑을 이룰 수 있을까?`,
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=92075'
  },
]

const makeTable = () => {
  const element = document.getElementById('tbody');
  element.innerHTML = movies.map((m) => tableRow(m.rank, m.title, m.poster, m.description, m.link)).join('');
}

const checkBox = (rank, title) => (
  `<input type="checkbox" name="xxx" value="yyy">${title}</input>`
)

const makeMovieCheckBox = () => {
  const element = document.getElementById('movieCheckBox');
  element.innerHTML = movies.map((m) => checkBox(m.rank, m.title)).join('');
}



const init = () => {
  makeTable();
  makeMovieCheckBox();
}
window.onload = function () {
  init();
}