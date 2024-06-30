<script lang="ts">
    import { Label, Input, Button, Heading, P } from 'flowbite-svelte';

    import type iMeta from '$lib/types/IMeta';
    import MetaHeaders from '$lib/components/MetaHeaders.svelte';

    import pkg from 'js-sha3';
    const { sha3_512 } = pkg;

    // init very vulnerable authentication
    let password: string;

    function checkAuth() {
        let checkRequest = new Request('/api/pw/' + sha3_512(password));
        fetch(checkRequest).then(function (value) {
            if (value.status == 200) {
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

    const meta: iMeta = {
        title: 'Authorization Required.',
        description: 'Enter your given password.'
    };
</script>

<svelte:head>
    <MetaHeaders {meta} />
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
