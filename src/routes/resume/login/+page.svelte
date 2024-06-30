<script lang="ts">
    import type { PageData } from './$types';

    import { Label, Input, Button, Heading, P } from 'flowbite-svelte';

    // init very vulnerable authentication
    let password: string;

    function checkAuth() {
        let checkRequest = new Request(
            //@ts-expect-error Function imported below.
            '/api/pw/' + sha3_512(password)
        );
        let checkResponse = fetch(checkRequest).then(function (value) {
            if (value.status == 200) {
                //@ts-expect-error Function imported below.
                window.location.href = '/resume?a=' + sha3_512(password);
                return;
            }
            // Show feedback to user
            alert('Password is wrong.');

            // Reset password field
            password = '';

            // Return
            return;
        });
    }
</script>

<svelte:head>
    <script async src="https://cdn.jsdelivr.net/gh/emn178/js-sha3/build/sha3.min.js"></script>
</svelte:head>

<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <div>
        <section class="w-full max-w-48">
            <form>
                <div class="mb-6">
                    <div class="mb-10">
                        <Heading>Authentication required.</Heading>
                        <div class="mt-5">
                            <P>
                                If you haven't gotten a password from someone, You've got nothing to
                                see here.
                            </P>
                        </div>
                    </div>
                    <Label for="password" defaultClass="text-primary-100">Password</Label>
                    <Input
                        bind:value={password}
                        type="password"
                        id="password"
                        placeholder="......."
                        required
                    />
                </div>
                <Button type="submit" on:click={checkAuth}>Submit</Button>
            </form>
        </section>
    </div>
</section>
