let peoples = got.houses.reduce((arr, el) => {
  arr = arr.concat(el.people);
  return arr;
}, []);

let ul = document.querySelector('ul');
peoples.forEach((el) => {
  let li = document.createElement('li');
  let img = document.createElement('img');
  img.src = el.image;
  let h2 = document.createElement('h2');
  h2.innerText = el.name;
  let p = document.createElement('p');
  p.innerText = el.description;
  let button = document.createElement('button');
  button.innerText = `Learn More`;
  let a = document.createElement('a');
  a.href = el.wikiLink;
  a.append(button);
  li.append(img, h2, p, a);
  ul.append(li);
});
