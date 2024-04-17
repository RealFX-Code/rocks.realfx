<script lang="ts">
    import {
        Heading,
        P,
        Card,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell
    } from 'flowbite-svelte';
</script>

<!-- Heading -->
<section class="mx-auto w-[calc(100%-10%)] sm:w-[calc(100%-35%)]">
    <Heading class="text-left" style="margin-bottom: 5rem;">Want to contact me?</Heading>
    <hr class="my-6 border-gray-500 dark:border-primary-600 sm:mx-auto lg:my-8" />
    <P>
        Even though I am just a kid, there might be times where you want/need to contact me. So
        below are ways to do that.
    </P>
    <br />
    <Card
        class="max-w-50 w-full space-y-10 bg-primary-50 dark:border-primary-700 dark:bg-primary-800"
    >
        <Heading tag="h2">Contact me</Heading>
        <Table>
            <TableHead>
                <TableHeadCell>Platform</TableHeadCell>
                <TableHeadCell>Username/tag</TableHeadCell>
            </TableHead>
            <TableBody>
                <TableBodyRow>
                    <TableBodyCell>Discord (Username)</TableBodyCell>
                    <TableBodyCell>@tromsobadet</TableBodyCell>
                </TableBodyRow>
                <TableBodyRow>
                    <TableBodyCell>Discord (Server)</TableBodyCell>
                    <TableBodyCell>
                        <a class="font-bold" href="/redirect/discord"> Click this to join </a>
                    </TableBodyCell>
                </TableBodyRow>
                <TableBodyRow>
                    <TableBodyCell>E-Mail</TableBodyCell>
                    <TableBodyCell>
                        <a href="mailto:rlfx@realfx.rocks"> rlfx@realfx.rocks </a>
                    </TableBodyCell>
                </TableBodyRow>
            </TableBody>
        </Table>
    </Card>
</section>

<style>
    a:hover {
        text-decoration: underline;
    }
</style>
