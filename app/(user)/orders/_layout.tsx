import { useColorScheme } from "@/components/useColorScheme";
import {  Stack } from "expo-router";


export default function MenuStack() {
    
    const colorScheme = useColorScheme();
    
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Orders'}}/>
        </Stack>
    )
}