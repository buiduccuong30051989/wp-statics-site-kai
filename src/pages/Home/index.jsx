import { NavLink } from "react-router-dom";

export const PageHome = () => {
  return (
    <div className="p-home">
      <div className="hero">
        <div className="container mx-auto">
          <div className="hero-inner flex justify-between items-center">
            <div className="w-1/2 pr-16">
              <div className="hero-content">
                <h2 className="text-4xl">
                  Eu excepteur laborum dolor exercitation.
                </h2>
                <p className="text-base mt-6">
                  Tempor ea aliqua sit nulla. Pariatur consequat enim commodo
                  excepteur consequat laboris. Minim laboris nisi et occaecat
                  ipsum magna. Anim fugiat consectetur enim nisi. Aute officia
                  aliquip adipisicing reprehenderit excepteur dolore magna
                  voluptate qui labore officia veniam.
                </p>
                <button className="btn-main lg mt-6">Button</button>
              </div>
            </div>

            <div className="hero-cover w-1/2 pl-12">
              <img src="/img/hero-img.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="order">
        <div className="container mx-auto">
          <div className="order-inner relative">
            <div className="order-tabs">
              <nav className="tabs list-none" id="tabs">
                <li className="active">
                  <a href="#tab1">Tab 1</a>
                </li>
                <li>
                  <a href="#tab2">Tab 2</a>
                </li>
                <li>
                  <a href="#tab3">Tab 3</a>
                </li>
              </nav>

              <section id="tab-contents">
                <div id="tab1" className="tab-contents active">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-card">
                      <div className="p-cover">
                        <img src="/img/p-1.png" />
                      </div>
                      <div className="p-content">
                        <div className="u-cover">
                          <img src="/img/u-1.png" />
                        </div>
                        <div className="u-content">
                          <h3>Eu excepteur</h3>
                          <p>Tempor ea aliqua sit nulla. Pariatur</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-card">
                      <div className="p-cover">
                        <img src="/img/p-2.png" />
                      </div>
                      <div className="p-content">
                        <div className="u-cover">
                          <img src="/img/u-2.png" />
                        </div>
                        <div className="u-content">
                          <h3>Eu excepteur</h3>
                          <p>Tempor ea aliqua sit nulla. Pariatur</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    <NavLink to={`/product/1`}>
                      <button className="btn-main lg min-w-[120px]">Button</button>
                    </NavLink>
                  </div>
                </div>
                <div id="tab2" className="tab-contents">
                  <p>These are the contents of tab 2.</p>
                </div>
                <div id="tab3" className="tab-contents">
                  <p>These are the contents of tab 3.</p>
                </div>
              </section>
            </div>

            <div className="order-content">
              <h2 className="text-4xl">Eu excepteur laborum dolor exercitation.</h2>
              <p className="text-base mt-6">
                Tempor ea aliqua sit nulla. Pariatur consequat enim commodo
                excepteur consequat laboris. Minim laboris nisi et occaecat
                ipsum magna. Anim fugiat consectetur enim nisi. Aute officia
                aliquip adipisicing reprehenderit excepteur dolore magna
                voluptate qui labore officia veniam.
              </p>
              <button className="btn-cart hidden"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
