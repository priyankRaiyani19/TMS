import RouteProvider from './routes/RouteProvider.tsx';
import {MantineProvider} from "@mantine/core";
import {theme} from "./theme.ts";


function App() {


    return(

        <MantineProvider theme={theme}>

        <RouteProvider/>
        </MantineProvider>
    )
}

export default App
