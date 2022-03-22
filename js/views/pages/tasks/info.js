import Component from '../../component.js';

class Info extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`     
                <div class="info">Info</div>            
            `);
    });
  }

  afterRender() {
    this.setActions();
  }

  setActions() {}

}

export default Info;
