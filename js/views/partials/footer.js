import Component from '../../views/component.js';

class Footer extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`
                <footer class="footer">                

                    <div class="footer__top">
                        <div class="footer__top_container container">
                            <div class="footer__description">Подпишитесь на нашу рассылку, и получите курс грамотного клиента! </div>
                            <input class="footer__input" placeholder="Введите E-mail"></input>
                            <button class="footer__button">Подписаться</button>
                        </div> 
                    </div> 

                    <div class="footer__main">
                        <div class="footer__main_container container">
                            <div class="wrap">
                                <img src="./images/Logo.svg" alt="logo" class="logo">
                            </div>

                            <div class="wrap_info">
                                <ul class="">
                                <li>Индивидуальный предприниматель
                                Керимов Руслан Юсиф Оглы</li> 
                                <li>УНП 491624519
                                Р/с BY06AKBB30130000107570000000
                                Банк: ОАО «АБС Беларусбанк»,
                                г. Гомель, ул. Фрунзе, 6а Код банка AKBBBY2X
                                Номер в Торговом реестре РБ: 512405
                                выдано 15.06.2021 г.</li> 
                                </ul>
                            </div>

                            <div class="wrap">
                                <ul class="">
                                    <li>Контакты</li> 
                                    <li>О компании</li> 
                                    <li>Импортёры</li> 
                                    <li>Сертификаты</li> 
                                    <li>Отзывы</li>
                                    <li>Вопрос — ответ</li>
                                </ul>
                            </div>

                            <div class="wrap">
                                <ul class="">
                                    <li>Производители</li> 
                                    <li>Как заказать</li> 
                                    <li>Оплата</li> 
                                    <li>Доставка</li> 
                                    <li>Сервисные центры</li>
                                    <li>Гарантия на товар</li>
                                </ul>
                            </div>

                            <div class="wrap_nav">
                                    <div class="">
                                        <img src="./images/Calling.svg" alt="logo" class="logo">
                                        <span>+375 33 664 44 05</span>
                                    </div>

                                    <div class="buttons">
                                        <img src="./images/YouTube.svg" alt="logo" class="logo">
                                        <img src="./images/instagram.svg" alt="logo" class="logo">
                                        <img src="./images/viber.svg" alt="logo" class="logo">
                                        <img src="./images/whatsapp.svg" alt="logo" class="logo">
                                        <img src="./images/telegram.svg" alt="logo" class="logo">
                                    </div>

                                    <div class="footer__info_label">
                                        <div>Сайт разработан:</div>
                                        <img src="./images/Group.svg" alt="logo" class="logo">
                                    </div>
                            </div>

                        </div> 
                    </div> 

                </footer>
            `);
    });
  }
}

export default Footer;
