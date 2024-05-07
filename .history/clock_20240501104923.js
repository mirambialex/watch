<script>
        setInterval(setClock,1000)
        const hourHand= document.querySelector ("[data-hour-hand]")
        const minuteHand = document.querySelector ("[data-minute-hand]")
        const secondHand = document.querySelector ("[data-second-hand]")

        function setCLASS() {
            const currentDate=new Date()
            const secondRatio =currentDate.getSeconds() / 60
            const minutesRatio =(secondRatio+currentDate.getMinutes)
            const hoursRatio=(minutesRatio+currentDate.gethours)
            setRotation(secondHand,secondsRatio)
            setRotation(minuteHand,minuteRatio)
            setRotation(hourHand,hoursRatio)
        } 
        function setRotation(element,rotationRatio)
        { 
        Element.style.setProperty("--rotation",rotationRatio*360)
        }
        setClock()
</script>