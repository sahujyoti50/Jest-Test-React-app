import { getByTestId, render, screen, testsuit } from '@testing-library/react';

describe('testing text on screen', () => {
  test('renders React Application link', () => {
    render(<App />);
    const linkElement = screen.getByText(/React Application/i);
    expect(linkElement).toBeInTheDocument();
  }); //1
  test('renders react application link case insensetive', () => {
    render(<App />);
    const linkElement = screen.getByText(/react application/i);
    expect(linkElement).toBeInTheDocument();
  }); //2
  test('testing App info Link is not present', () => {
    render(<App />);
    const textElement = screen.queryByText('App info');
    expect(textElement).toBeNull();
  }); //3
  test('testing App info Link is not present with not tobe..', () => {
    render(<App />);
    const textElement = screen.queryByText('App info');
    expect(textElement).not.toBeInTheDocument();
  }); //4
  test('testing submit text', () => {
    render(<App />);
    const textElement = screen.queryAllByText('submit');
    expect(textElement).toHaveLength(2);
  }); //5
  test('testing List Items is present', () => {
    render(<App />);
    const textElement = screen.queryByText(/list items/i);
    expect(textElement).not.toBeNull();
  }); 
test('testing checklist is not present', () => {
  render(<App />);
  expect(() => getByText('your text')).toThrow('getByText is not defined');
}); 
test('testing button is present', () => {
  render(<App />);
  const button=screen.getAllByRole('button');
  expect(button).toHaveLength(2);
}); 
test('testing button is not present', () => {
  render(<App />);
  const button=screen.queryByRole('button');
  console.log(button);
  expect(button).toEqual(null);
}); 
test("testing button", async () => {
  render(<App />);
  let errormsg = false;
  try {
    await screen.findByRole("button");
  } catch (error) {
    errormsg = true;
  }
  expect(errormsg).toEqual(true);
});
test('testing list',()=>{
  render(<App/>);
  const List=screen.getByRole('listitem');
  expect(List).toBeInTheDocument();
})
test('testing list',()=>{
  render(<App/>);
  const List=screen.getAllByRole('listitem');
  expect(List).toHaveLength(4);
})
test('test button with hidden true',()=>{
  render(<App/>);
  const button=screen.getByRole('dialog',{hidden:true});
  expect(button).toBeInTheDocument();
}) //A
})
test('test button with hidden true',()=>{
  render(<App/>);
  <div role="dialog">...</div>
  render(<MyComponent />)
  const dialogContainer = screen.getByRole('dialog');
  <main aria-hidden="true"></main>
  const button=screen.getByRole('dialog',{hidden:true});
  <button role="tab" aria-selected="true">Native</button>
  const button1=screen.getByRole('dialog',{selected:true});
  <button role="checkbox" aria-checked="true">Sugar</button>
  const button2=screen.getByRole('dialog',{checked:true});
  <a href="current/page" aria-current="true">👍</a>
  const button3=screen.getByRole('dialog',{current:true});
  <button aria-pressed="true">👍</button>
  const button4=screen.getByRole('dialog',{pressed:true});
  <a aria-expanded="false" aria-haspopup="true" href="...">Expandable Menu Item</a>
  const button5=screen.getByRole('dialog',{expanded:true});
  <div role="heading" aria-level="2">Second Heading Level Two</div>
  const button6=screen.getByRole('dialog',{level:2});
[
  <h2>First Heading Level Two</h2>,
  <div role="heading" aria-level="2">Second Heading Level Two</div>
]
test('test button', () => {
  render(<App/>);
  const button10 = screen.getAllByRole('dialog1');
  expect(button10).toHaveLength(2);
})

 <div>
<label htmlFor="username-input">Username</label>
<input id="username-input" />
</div>
test('testing getByabelText',()=>{
  render(<App/>);
  const inputNode = screen.getByLabelText('Username');
  expect(inputNode).toBeInTheDocument();  
}) 
<div>
      <label htmlFor="username-input">Username</label>
      <input id="username-input" />
    </div>
    test('testing getByabelText',()=>{
      render(<App/>);
      const inputNode = screen.getByRole('textbox',{name:'Username'});
      expect(inputNode).toBeInTheDocument();  
    })
<>
  <label id="username">Username</label>
  <input aria-labelledby="username" />
  <span aria-labelledby="username">Please enter your username</span>
</>
test('testing getByabelText',()=>{
  render(<App/>);
  const inputNode = screen.getByLabelText('Username',{selector:'input'});
  expect(inputNode).toBeInTheDocument();  
})
<>
  <input placeholder="username" />
test('testing getByPlaceholderText',()=>{
  render(<App/>);
  const inputNode = screen.getByPlaceholderText('username');
  expect(inputNode).toBeInTheDocument();  
})
})

<a href="/about">About</a>
test('testing getBytext',()=>{
 render(<App/>);
  const text = screen.getByText('About');
 expect(text).toBeInTheDocument();  
})
 <a href="/about">About</a>
    <button href="/about">About</button>
    test('testing getBytext',()=>{
  render(<App/>);
   const text = screen.getAllByText('About',{selector:'button'});
  expect(text).toHaveLength(1);
 })
    <a href="/about">About123</a>
test('testing getBytext', () => {
  render(<App />);
  const text = screen.getAllByText('About', { exact: false });
  expect(text).toHaveLength(1);
})
    <a href="/about">About123</a>
test('testing getBytext', () => {
  render(<App />);
  const text = screen.getByText(/about/i);
  expect(text).toBeInTheDocument();
})
   <input id="firstName" defaultValue={'sid'}/>
test('testing getByDisplayValue', () => {
  render(<App />);
  const firstNameInput = screen.getByDisplayValue('sid');
  expect(firstNameInput).toBeInTheDocument();
})
<select>
  <option value="">State</option>
  <option value="AL">Alabama</option>
  <option selected value="AK">Alaska</option>  //default
  <option value="AZ">Arizona</option>
</select>
test('testing getByDisplayValue', () => {
  render(<App />);
  const firstNameInput = screen.getByDisplayValue('Alaska');
  expect(firstNameInput).toBeInTheDocument();
});
function App() {
  const test = 'test';
  const [input, setInput] = useState('AL');
  return (
    <>
      <select onChange={(e) => setInput(e.target.value)} value={input}>
        <option value="">State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
      </select>
    </>
  );
}
test('testing getByDisplayValue', () => {
  render(<App />);
  const firstNameInput = screen.getByDisplayValue('Alabama');
  expect(firstNameInput).toBeInTheDocument();
});
    <img alt='national flag' src=''/>
test('testing getByAlt', () => {
  render(<App />);
  const img = screen.getByAltText('national',{exact:false});
  expect(img).toBeInTheDocument();
});
    <img alt="Incredibles 2 Poster" src='/incredibles-2.png'/>
test('testing getByAlt', () => {
  render(<App />);
  const img = screen.getByAltText(/Incredibles.*? Poster/);
  expect(img).toBeInTheDocument();
});
<span title="Delete" id="2"></span>
test('testing getByAlt', () => {
  render(<App />);
  const img = screen.getByTitle('Delete');
  expect(img).toBeInTheDocument();
});
<title>Close</title>
test('testing getByAlt', () => {
  render(<App />);
  const img = screen.getByTitle('Close');
  expect(img).toBeInTheDocument();
});
<div data-testid="custom-element" />
test('testing getByAlt', () => {
  render(<App />);
  const div = screen.getByTestId('custom-element');
  expect(div).toBeInTheDocument();
});

import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
test('testing submit button', () => {
  arrange

  act
  const handleClick = jest.fn();
  render(<App />);
  fireEvent.click(screen.getByText('submit'));

  assert
  const button=screen.getByText('button Clicked');
  expect(button).toBeInTheDocument();
  
});



