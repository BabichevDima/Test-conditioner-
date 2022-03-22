import Component from '../../component.js';

class Stock extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`     
                <div class="stock">Stock</div>            
            `);
    });
  }

  afterRender() {
    this.setActions();
  }

  setActions() {}
}

export default Stock;
