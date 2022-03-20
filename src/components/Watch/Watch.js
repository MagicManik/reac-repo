import React, { useEffect, useState } from 'react';

const Watch = () => {
    // useState এবং setKodom কে Dispatch ও বলে অনেকে।
    // setKodom একটা এ্যাকশনকে ডেলিভারি দেয়। যেটা তার বাম পাশের ভেরিয়েবল পায়।
    const [kodom, setKodom] = useState(0)

    const kodomCount = () => {
        const newKodom = kodom + 1;
        //উপরের লাইনগুলা sychronous হলেও নিচের লাইনটা setTimeout এর মতো Asychronous. কারণ কদম এর নতুন মান সে সব কোড এক্সিকিউ হওয়ার পর সেট করে।
        setKodom(newKodom)
        // console.log(kodom)
    }

    // কদম এর কারেন্ট নতুন মান console log করে পাওয়ার জন্য আমরা একটা বিশেষ hook ইউজ করতে পারি। সেটা হলে useEffect. ইউজএফেক্টকে এমনিতে চেইঞ্জ করা বা বারবার রান করা সম্ভব হয় না। কিন্তু সে অন্য কারো উপর ডিপেন্ড করে বারবার রান হতে বা চেইঞ্জ হতে পার। অর্থাৎ useEffect যার উপর ডিপেন্ড করতেছে সে যতবার চেইঞ্জ হবে useEffect ঠিক ততবার চেইঞ্জ হবে। তাই একে ডিপেনডেন্সি লিস্ট বলে। সে কার ইউপরে ডিপেন্ড করবে সেটা আমরা তার Array এর মধ্যে সেট করে দিতে পারি। যেমন,
    useEffect(() => {
        console.log(kodom)
    }, [kodom])


    return (
        <div>
            <h1>Kodom: {kodom}</h1>
            <button onClick={kodomCount}>De Dour.......</button>
        </div>
    );
};

export default Watch;