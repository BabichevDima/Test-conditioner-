import Component from '../component.js';

class MainPage extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`
            <main>
              <section class="banner">
                <div class="container container__banner">
                  <h1 class="title">
                    Идеальный климат в вашем доме <span class="selected_text">за 24 часа</span>
                  </h1>
                  <p class="description">
                    Оставьте заявку, чтобы получить консультацию специалиста, узнать
                    цену и сделать заказ
                  </p>
                  <button class="button">Обратный звонок</button>
                </div>
              </section>

              <section class="advantages">
                <div class="container container__advantages">
                  <div class="advantages__wrap">
                    <img src="./images/Frame1.svg" alt="logo" class="">
                    <h3 class="advantages_title">Быстро</h3>
                    <p class="advantages_description">Нашим клиентам не нужно долго ждать заказ</p>
                  </div>
                  <div class="advantages__wrap">
                    <img src="./images/Frame2.svg" alt="logo" class="">
                    <h3 class="advantages_title">Надежно</h3>
                    <p class="advantages_description">Наша компания гарантирует высокое качество товаров</p>
                  </div>
                  <div class="advantages__wrap">
                    <img src="./images/Frame3.svg" alt="logo" class="">
                    <h3 class="advantages_title">Проффесионально</h3>
                    <p class="advantages_description">Более 13 тыс. клиентов довольных нашей работой</p>
                  </div>
                  <div class="advantages__wrap">
                    <img src="./images/Frame4.svg" alt="logo" class="">
                    <h3 class="advantages_title">Рассрочка 0%</h3>
                    <p class="advantages_description">Мы предлагаем выгодные условия покупки товара</p>
                  </div>
                </div>
              </section>


              <section class="services">

                <div class="container container__services">
                  <div class="services__wrap conditioner">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Кондиционеры</p>
                  </div>
                  <div class="services__wrap ventilation">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Вытяжная вентиляция</p>
                  </div>
                  <div class="services__wrap water-heaters">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Водонагреватели</p>
                  </div>
                  <div class="services__wrap heaters">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Обогреватели</p>
                  </div>
                </div>

                <div class="container container__services">
                  <div class="services__wrap thermal-curtains">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Тепловые завесы</p>
                  </div>
                  <div class="services__wrap heat-guns">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Тепловые пушки</p>
                  </div>
                  <div class="services__wrap electric-dryers">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Электросушилки для рук</p>
                  </div>
                  <div class="services__wrap fans">
                    <div class="circle">
                      <img src="./images/arrow.svg" alt="arrow" class="arrow">
                    </div>
                    <p class="services_description">Вентиляторы</p>
                  </div>
                </div>

              </section>
            </main>
            `);
    });
  }
}

export default MainPage;
