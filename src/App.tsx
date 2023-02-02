import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam maiores
        voluptatibus commodi odit laboriosam quia quos quis ipsam accusantium,
        necessitatibus velit obcaecati, quidem molestiae doloribus! Odio ratione
        iure nemo voluptatem!
      </p>
    </ThemeProvider>
  );
}
