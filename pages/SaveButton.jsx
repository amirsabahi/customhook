import { useEffect, useState } from "react"
import useIsOnline from "./useIsOnline";

export default function SaveButton(){
    const isOnline = useIsOnline();

    function handleSave() {
        console.log('✅ Progress saved');
    }

    return (
        <button disabled={!isOnline} onClick={handleSave}>
            {isOnline? 'Save': 'Reconnecting..' }
        </button>
    )
}