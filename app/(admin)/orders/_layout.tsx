import { useColorScheme } from "@/components/useColorScheme";
import {  Stack } from "expo-router";


export default function MenuStack() {
    
    const colorScheme = useColorScheme();
    
    return (
        <Stack>
            <Stack.Screen name="list" options={{headerShown:false}}/>
        </Stack>
    )
}