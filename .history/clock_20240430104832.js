<script>
        setInterval(setClock,1000)
        const hourHand= document.querySelector ("[data-hour-hand]")
        const minuteHand = document.querySelector ("[data-minute-hand]")
        const secondHand = document.querySelector ("[data-second-hand]")

        function setCLASS() {
            const currentDate=new Date()
            const secondRatio =currentDate.getSeconds() / 60
            const minutesRatio =(secondRatio+currentDate.getMinutes())/
            const hoursRatio=(minutesRatio+currentDate.gethours())/
            setRotatio(secondHand,secondsRatio)
            setRotatio(minuteHand,minuteRatio)
            setRotatio(hourHand,hoursRatio)
        } 
        function setRotatio(element,rotatio)
</script>