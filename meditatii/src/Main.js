import Header from "./components/Header/Header";
import "./main.scss";

export default function App() {
  return (
    <div>
      <section className="scroll-s-one" data-section-name="s-one">
        <div className="containerS">
          <div className="row">
            <div className="col-lg-12">
              <p>section one</p>
            </div>
          </div>
        </div>
      </section>
      <section className="scroll-s-two" data-section-name="s-two">
        <div className="containerS">
          <div className="row">
            <div className="col-lg-12">
              <p>section two</p>
            </div>
          </div>
        </div>
      </section>
      <section className="scroll-s-three" data-section-name="s-three">
        <div className="containerS">
          <div className="row">
            <div className="col-lg-12">
              <p>section three</p>
            </div>
          </div>
        </div>
      </section>

      <div className="containerM">
        <img src="https://picsum.photos/200/300" />
      </div>
      <div className="scroll-control">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </div>
    </div>
  );
}
