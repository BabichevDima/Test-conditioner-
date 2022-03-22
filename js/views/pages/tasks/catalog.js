import Component from '../../component.js';

class Catalog extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`     
                <div class="catalog">Catalog</div>            
            `);
    });
  }

  afterRender() {
    this.setActions();
  }

  setActions() {}

}

export default Catalog;
