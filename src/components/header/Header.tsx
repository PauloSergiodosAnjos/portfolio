export default function Header() {
    return (
    <>
        <header className="flex justify-between px-[10rem] pt-5">
        <section className="font-bold text-3xl">Paulo.</section>
        <section>
            <ul className="flex gap-[8rem]">
                <li className="text-lg">About me</li>
                <li className="text-lg">Contact</li>
                <li className="text-lg">Projects</li>
            </ul>
        </section>
        </header>
    </>
)
}
