<script lang="ts">

    import "./../styles/global.css";
    import "./../styles/card.css";

    const calculateAge = (birthday : any) => {
        //@ts-ignore
        var years = new Date(new Date() - new Date(birthday)).getFullYear() - 1970;
        return years;
    }
    
    // Date format: yyyy-mm-dd
    let x = calculateAge("2008-04-01")

</script>

<svelte:head>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,800;1,400;1,800&display=swap" as="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,800;1,400;1,800&display=swap">
</svelte:head>

<div id="app" class="fill">
    <div class="hero fill">
        <div class="card">
            <div class="title">
                <h1 title="She/They/Fae">
                    I'm Sometime.
                </h1>
                <!-- <span>
                    More Down
                    &darr;
                </span> -->
            </div>
            <div class="text">
                <p id="age">
                    I'm a {x} year old student,
                    And I like to do web development in my free time.
                </p>
            </div>
        </div>
    </div>
</div>