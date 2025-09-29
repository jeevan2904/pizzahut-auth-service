function welcome(name: string) {
  console.log('Welcome, ' + name);

  const user = {
    name: 'Reddy',
  };

  const firstName = user.name;

  return name + firstName;
}

welcome('Jeevan Reddy');
