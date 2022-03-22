import Component from '../../views/component.js';

class Header extends Component {
  render() {
    const resource = this.request.resource;

    return new Promise(resolve => {
      resolve(`
                 <header class="header">
                    
                    <div class="header__top">
                        <div class="header__top_container container">
                            <div class="header__info">
                                <a class="header__link" href="/#/" title="Перейти на главную страницу">
                                <img src="./images/Logo.svg" alt="logo" class="logo_main">
                                </a> 
                                <div class="text">г. Гомель и Гомельская область</div>
                                <div class="working_mode">
                                    <div>с 9.00 до 19.00 Пн-Пт</div>
                                    <div>с 9.00 до 16.00 Сб-Вс</div>
                                </div>
                            </div>
                            <div class="header__bar">
                                <a class="header__bar_call" href="tel:+375 33 664 44 05">
                                    <img src="./images/Calling.svg" alt="logo" class="logo_call">
                                    <span>+375 33 664 44 05</span>
                                </a>
                                <img src="./images/Vector.svg" alt="logo" class="logo">
                                <img src="./images/Buy.svg" alt="logo" class="logo">
                            </div>
                        </div>
                    </div>
                    
                    <div class="header__menu">
                        <div class="header__menu_container container">
                        <a class="header__link ${resource === 'stock'
                          ? 'active'
                          : ''}" href="/#/stock">
                            Акции
                        </a>
                        <a class="header__link ${resource === 'catalog'
                          ? 'active'
                          : ''}" href="/#/catalog">
                            Каталог
                        </a>        
                        
                        <a class="header__link ${resource === 'about_company'
                          ? 'active'
                          : ''}" href="/#/about_company">
                            О компании
                        </a>  
                        
                        <a class="header__link ${resource === 'info'
                          ? 'active'
                          : ''}" href="/#/info">
                            Информация
                        </a>  
                
                        <a class="header__link ${resource === 'help'
                          ? 'active'
                          : ''}" href="/#/help">
                            Помощь
                        </a>

                        <a class="header__link ${resource === 'contacts'
                          ? 'active'
                          : ''}" href="/#/contacts">
                            Контакты
                        </a>    
                        </div>
                    </div>    

                </header>
            `);
    });
  }

  
  afterRender() {
    this.setActions();
  }

  setActions() {

  }
  
}

export default Header;
