<script lang="ts">

    interface IMessage {
        content  : string,
        duration : number,
        severity ?: "error"|"warning"|"info"
    }

    let MessageDataStore : IMessage = {
        content  : "placeholder info",
        duration : 0,
        severity : "info"
    }

    function hideMessageNow() {
        messageContainer.style.display = "none";
        messageContainer.classList.remove("hidden");
    }

    const iconSize = 24

    let messageContainer : HTMLDivElement;

    let timeouts : Array<number> = [

    ];

    export async function SendMessage(message : IMessage) {
        timeouts.forEach(function(value){
            clearTimeout(value);
        });
        hideMessageNow(); //make sure it's gone before showing another one
        messageContainer.style.display = "flex";
        MessageDataStore = message;
        let fadeOutAfterTimeout = setTimeout(function(){
            messageContainer.classList.add("hidden");
            let ClearAfterFadeoutIsDone = setTimeout(function(){
                hideMessageNow();
            },1000)
            timeouts.push(ClearAfterFadeoutIsDone);
        },message.duration);

        timeouts.push(fadeOutAfterTimeout);

    }

    export function StopMessage() {
        hideMessageNow();
    }

</script>

<div class="message {MessageDataStore.severity}" bind:this={messageContainer}>
    <svg width="{iconSize}" height="{iconSize}">
        <image xlink:href="/assets/icons/alert-{MessageDataStore.severity}.svg" width="{iconSize}" height="{iconSize}"/>
    </svg>
    <p>{MessageDataStore.content}</p>
</div>

<style>
    /*
        ignore my messy code, this will possibly be improved at a later date.
    */
    .message.info {
        --message-bg-1: #b3dee2dd;
        --message-bg-2: rgba(255,255,255,0.5);

        --message-fg-1: #001e21;
    }
    .message.warning {
        --message-bg-1: #EAF2D7dd;
        --message-bg-2: rgba(255,255,255,0.5);

        --message-fg-1: #171d05;
    }
    .message.error {
        --message-bg-1: #E27396dd;
        --message-bg-2: rgba(255,255,255,0.5);

        --message-fg-1: #440014;
    }

    .message {
        user-select: none;
        pointer-events: none; 
        position: absolute;
        top: 24px;
        left: 24px;
        width: fit-content;
        display: none; /* will be flex when shown*/
        padding: 12px;
        border: 2px var(--message-bg-2) solid;
        background-color: var(--message-bg-1);
        border-radius: 16px;

        transition: opacity 1s ease;

    }

    .message.hidden {
        opacity: 0%;
    }

    .message > p,
    .message > svg {
        display: inline;
        color: var(--message-fg-1);
    }

    .message > svg {
        margin: auto;
    }

    .message > p {
        margin: 12px;
    }

</style>