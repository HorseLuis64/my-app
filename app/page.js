import './page.css';

export default function Home() {
  const lita = [1,2,3,4,5,6,7,8,9,10];
  const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía", "Javier", "Lucía", "Miguel", "Paula", "Andrés"];
  const personas = [
    { nombre: "Ana", apellido: "García", correo: "ana.garcia@email.com", edad: 22 },
    { nombre: "Luis", apellido: "Martínez", correo: "luis.martinez@email.com", edad: 28 },
    { nombre: "María", apellido: "López", correo: "maria.lopez@email.com", edad: 25 },
    { nombre: "Carlos", apellido: "Sánchez", correo: "carlos.sanchez@email.com", edad: 30 },
    { nombre: "Sofía", apellido: "Fernández", correo: "sofia.fernandez@email.com", edad: 27 },
    { nombre: "Javier", apellido: "Ruiz", correo: "javier.ruiz@email.com", edad: 24 }
  ];
  const productos = [
    { nombre: "Laptop Lenovo IdeaPad 3", descripcion: "Portátil con procesador Intel Core i5, 8GB RAM, 512GB SSD.", categoria: "Tecnología", cantidad: 10, precio: 2500000, url: "https://catalogo.claro.com.ec/uploads/imgs/productos/81wa00q2lm-ideapad-i3/gris/zoom/03-81wa00q2lm-ideapad-i3-gris-back.png" },
    { nombre: "Camiseta Nike Sportswear", descripcion: "Camiseta deportiva para hombre, color negro, 100% algodón.", categoria: "Ropa", cantidad: 25, precio: 85000, url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e57d11d-0f56-4907-94a1-a547b098f41b/sportswear-camiseta-fgGZJH.png" },
    { nombre: "Audífonos JBL Tune 510BT", descripcion: "Audífonos inalámbricos Bluetooth, hasta 40 horas de batería.", categoria: "Tecnología", cantidad: 15, precio: 180000, url: "https://agaval.vtexassets.com/arquivos/ids/1864186/image-b1df0fd8a58b41a58493738b96eac44d.jpg?v=638623480257900000" },
    { nombre: "Silla Ergonómica Oficina", descripcion: "Silla con soporte lumbar, altura ajustable y ruedas.", categoria: "Hogar", cantidad: 8, precio: 320000, url: "https://ergonomus.co/cdn/shop/collections/Principal-5.jpg?v=1741811754" },
    { nombre: "Cafetera Oster 12 Tazas", descripcion: "Cafetera eléctrica con filtro permanente y función de pausa.", categoria: "Electrodomésticos", cantidad: 12, precio: 145000, url: "https://tse3.mm.bing.net/th/id/OIP.AwfO5NB4dxW4dDb-RPbTiQHaHa" }
  ];

  return (
    <div className="p-8">
      <div className="numbers">
        {lita.map((n, i) => <p key={i}>{n}</p>)}
      </div>

      <div className="names">
        {nombres.map((n, i) => <p key={i}>{n}</p>)}
      </div>

      <div className="personas">
        {personas.map((p, i) => (
          <p key={i}>nombre: {p.nombre} apellido: {p.apellido} correo: {p.correo} edad: {p.edad}</p>
        ))}
      </div>

      <div className="productos">
        {productos.map((n, index) => (
          <div key={index} className="producto">
            <img src={n.url} alt={n.nombre} />
            <p><strong>{n.nombre}</strong></p>
            <p>{n.descripcion}</p>
            <p><em>{n.categoria}</em></p>
            <p>${n.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
