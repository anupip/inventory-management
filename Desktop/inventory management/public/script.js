const url = 'http://localhost:8080';

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const res = await fetch(`${url}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.status === 200 && data.access_token) {
    localStorage.setItem('token', data.access_token);
    window.location.href = 'cred.html';
  } else {
    alert(data.message || 'Login failed');
  }
}

async function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const res = await fetch(`${url}/login/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
}

async function addProduct() {
  const body = {
    name: document.getElementById('name').value,
    type: document.getElementById('type').value,
    sku: document.getElementById('sku').value,
    image_url: document.getElementById('image_url').value,
    description: document.getElementById('description').value,
    quantity: +document.getElementById('quantity').value,
    price: +document.getElementById('price').value
  };

  const res = await fetch(`${url}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(body)
  });

  if (res.status === 201) {
    alert('Product added successfully');
  } else {
    const data = await res.json();
    alert(data.message || 'Failed to add product');
  }
}

async function getProducts() {
  const res = await fetch(`${url}/products`, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  });

  const data = await res.json();
  const list = document.getElementById('productList');
  list.innerHTML = '';

  data.products.forEach(p => {
    const li = document.createElement('li');
    li.innerText = `${p.name} - ${p.quantity}`;
    list.appendChild(li);
  });
}
