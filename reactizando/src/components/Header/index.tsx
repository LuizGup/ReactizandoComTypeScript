type HeaderProps = {
    title: string;
};

function Header({ title }: HeaderProps) {
    return (
        <div className="row mine">
            <h1>{title}</h1>
        </div>

    );
};

export default Header;