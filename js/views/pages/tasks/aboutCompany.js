import Component from '../../component.js';

class AboutCompany extends Component {
  render() {
    return new Promise(resolve => {
      resolve(`     
                <div class="about_company">About Company</div>            
            `);
    });
  }

  afterRender() {
    this.setActions();
  }

  setActions() {}
}

export default AboutCompany;
