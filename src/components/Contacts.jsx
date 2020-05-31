import React from 'react';

import Contact from './Contact';

class Contacts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contacts: [] };
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then((response) => {
        return response.json();
      })
      .then((data) => this.setState({ contacts: data }));
  }

  render() {
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact
            data={{
              avatar: null,
              name: 'Nome',
              phone: 'Telefone',
              country: 'País',
              admissionDate: 'Admissão',
              company: 'Empresa',
              department: 'Departamento',
            }}
          />
          {this.state.contacts.map((contact) => (
            <Contact
              key={contact.id}
              data={{
                avatar: contact.avatar,
                name: contact.name,
                phone: contact.phone,
                country: contact.country,
                admissionDate: contact.admissionDate,
                company: contact.company,
                department: contact.department,
              }}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Contacts;
