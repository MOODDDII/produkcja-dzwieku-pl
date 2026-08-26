function createSlider(container, slides) {
  let current = 0;

  const imageEl = container.querySelector(".slider_img img");
  const paragraphsEl = container.querySelector(".slider_paragraphs");
  const titleEl = container.querySelector(".slider_step-title");
  const stepEl = container.querySelector(".slider_step-number");
  const prevBtn = container.querySelector('[data-role="prev"]');
  const nextBtn = container.querySelector('[data-role="next"]');

  function render() {
    const slide = slides[current];
  
    imageEl.src = slide.img;
    imageEl.alt = slide.alt || "";
  
    if (titleEl && slide.title) titleEl.textContent = slide.title;
    if (stepEl && slide.step) stepEl.textContent = slide.step;
  
    const existingPs = paragraphsEl.querySelectorAll("p.slider-desk");
    existingPs.forEach(p => p.remove());
  
    slide.texts.forEach((text) => {
      const p = document.createElement("p");
      p.className = "slider-desk";
      p.textContent = text;
      paragraphsEl.appendChild(p);
    });
  }

  function go(direction) {
    current = (current + direction + slides.length) % slides.length;
    render();
  }

  prevBtn.addEventListener("click", () => go(-1));
  nextBtn.addEventListener("click", () => go(1));

  render();
}

const kimJestemSlides = [
  {
    img: "./images/who-1.png",
    texts: [
      "Pracuję zarówno przy rejestracji dźwięku na planach filmowych, jak i przy montażu oraz postprodukcji ścieżki dźwiękowej. Te dwa obszary zawsze naturalnie się uzupełniają. Dzięki temu patrzę na dźwięk w filmie jak na jeden spójny proces - od momentu jego nagrania na planie aż po finalny mix i emisję",
    ],
  },
  {
    img: "./images/who-2.png",
    texts: [
      "Jestem realizatorem dźwięku, który sprawia, że dźwięk pracuje dla Ciebie i staje się przewodnikiem; prowadzi widza przez kolejne momenty filmu",
      "Nazywam się Krzysztof Bąk. Jestem absolwentem Wydziału Radia i Telewizji Uniwersytetu Śląskiego w Katowicach. Dźwięk towarzyszy mi przez całe moje życie zawodowe - od pierwszych lat pracy w Polskim Radiu aż po dzisiejsze projekty realizowane dla telewizji, kina, Internetu i przestrzeni multimedialnych",
    ],
  },
  {
    img: "./images/who-3.png",
    texts: [
      "Marka postprodukcjadzwieku.pl jest ściśle powiązana z projektem dzwiekwfilmie.pl, który rozwijam od 2012 roku. To miejsce, w którym producenci i twórcy mogą znaleźć profesjonalną usługę rejestracji dźwięku na planie filmowym - doświadczonego dźwiękowca oraz zaplecze sprzętowe potrzebne do realizacji nagrań na najwyższym poziomie. Oba projekty wzajemnie się uzupełniają: jeden skupia się na realizacji i rejestracji dźwięku na planie filmowym, drugi - na postprodukcji",
    ],
  },
];

const jakPracujeSlides = [
  {
    img: "./images/how-1png.png",
    step: 1,
    title: "Przyjęcie i analiza materiału",
    texts: [
      "Każdy projekt startuje z chwilą gdy materiał trafia do mnie, zwykle w postaci surowych ścieżek dźwiękowych z planu filmowego lub z montażu obrazu. To moment, w którym zaczynam pracę nad tym, żeby dźwięk nabrał jakości, spójności i finalnie brzmiał profesjonalnie – tak, aby bez problemu mógł trafić do emisji w kinie, telewizji czy Internecie",
    ],
  },
  {
    img: "./images/how-2png.png",
    step: 2,
    title: "Czyszczenie i montaż dialogów",
    texts: [
      "Materiał z planu zdarza się, że nie jest idealny – i to zupełnie normalne. Plan filmowy to żywe środowisko, gdzie nie wszystko można kontrolować. Usuwanie szumów i zakłóceń, redukcja podestów, eliminacja oderek mikrofonów o ubrania, dopasowanie dźwięków z różnych dubli... To techniczne zabiegi, które wykonuję po to, by widz mógł skupić się wyłącznie na historii",
    ],
  },
  {
    img: "./images/how-3png.png",
    step: 3,
    title: "Budowanie przestrzeni dźwiękowej",
    texts: [
      "Dopasowanie atmosfer i tła scen, integracja efektów dźwiękowych, wyrównanie dynamiki między scenami, przygotowanie materiału do finalnego miksu. Jeśli projekt wymaga sound designu lub kreatywnej warstwy dźwiękowej, pojawia się dodatkowy etap pracy koncepcyjnej. To moment, w którym dźwięk przestaje być tylko techniką, a staje się częścią narracji filmu",
    ],
  },
  {
    img: "./images/how-4png.png",
    step: 4,
    title: "Finalny mix",
    texts: [
      "W zależności od przeznaczenia projektu przygotowuję mix stereo, 5.1 surround lub inne konfiguracje wymagane przez system emisji. Dbam, aby mix był zgodny z obowiązującymi standardami emisyjnymi, tak aby gotowy materiał spełniał wymagania techniczne stawiane przez nadawców",
    ],
  },
  {
    img: "./images/how-5png.png",
    step: 5,
    title: "Materiał gotowy do emisji",
    texts: [
      "Otrzymujesz ode mnie kompletny zestaw plików – finalny mix, wersja emisyjna zgodne ze standardami, ewentualne STEM'y – dialogi, muzykę, efekty. W tym momencie dźwięk jest już w pełni profesjonalny, spójny i gotowy do publikacji. Każdy projekt jest trochę inny – ale cel pozostaje ten sam: sprawić, by Twoja historia zabrzmiała dokładnie tak, jak powinna",
    ],
  },
];

createSlider(document.querySelector(".slider-1"), kimJestemSlides);
createSlider(document.querySelector(".slider-2"), jakPracujeSlides);
createSlider(document.querySelector(".slider-3"), jakPracujeSlides);