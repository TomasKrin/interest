import { FC, ReactNode, useState } from "react";

// Render props yra sablonas kurio pagalba galima dalintis funkcionulumu tarp komponentu

//Pavyzdziai kada naudoti RenderProps:

//Kai reikia dalintis logika tarp kelių komponentų: Jei yra keli komponentai, kurie turi pasiekti tuos pačius duomenis ar funkcionalumą, galima naudoti render prop'us, kad perduotum reikiamą informaciją kiekvienam komponentui.

//Kai reikia abstrahuoti realizacijos detales: Jei turite sudėtingą ar dinaminį komponentą, kurį norite padaryti pernaudojamą, galite naudoti render prop'us, kad abstrahuotumėte realizacijos detales ir rodytumėte tik būtiną sąsają kitiems komponentams.

//Kai reikia suteikti keičiamą elgesį: Jei turite komponentą, kuris turi suteikti keičiamą elgesį pagal savo props, galite naudoti render prop'us, kad perduotumėte funkciją, kuri įgyvendina konkrečią elgesio strategiją.

//Kai reikia suteikti konteksto specifinį elgesį: Jei turite komponentą, kuris turi elgtis skirtingai priklausomai nuo konteksto, kuriame jis naudojamas, galite naudoti render prop'us, kad perduotumėte funkciją, kuri suteikia reikiamą kontekstą.

//Kai reikia suteikti duomenų gavimo mechanizmą: Jei turite komponentą, kuris turi gauti duomenis iš API ar kitos šaltinio, galite naudoti render prop'us, kad perduotumėte funkciją, kuri tvarko duomenų gavimą ir grąžina reikiamus duomenis komponentui.

//Iš esmės, render prop'ai gali būti naudingi, kai reikia dalintis funkcionalumu tarp komponentų lanksčia ir pernaudojama forma. Tačiau, svarbu apsvarstyti kitus šablonus ir technikas, pvz., React hooks, HOCs ir context API, kurie kai kuriems scenarijams gali suteikti paprastesnius ir efektyvesnius sprendimus.

interface MouseTrackerProps {
  render: (mousePos: { x: number; y: number }) => ReactNode;
}

const MouseTracker: FC<MouseTrackerProps> = ({ render }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{render(mousePos)}</div>;
};

const App: FC = () => {
  return (
    <MouseTracker
      render={(mousePos) => (
        <p>
          Mouse position: {mousePos.x}, {mousePos.y}
        </p>
      )}
    />
  );
};

export default App;
