import Modal from 'react-modal';

const NewUser = ({ onCreate }) => {

    function submitHandler(event) {
        event.preventDefault();
        const createUser = {
            username: event.target.username.value,
            password: event.target.password.value,
            email: event.target.email.value,
        };
        onCreate(createUser);
    }

    return (
        <>
            <Modal
                isOpen={props.modalIsOpen}
                ariaHideApp={false}
            ></Modal>
            <div className="bg-color-main dark:bg-color-main-dark h-[calc(100vh-10em)] dark:text-color-bright-dark">
                <h1 className="flex flex-col mx-auto w-4/6 items-center">New User Sign Up</h1>
                <div className=" flex h-5/6 text-white">
                    <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center text-black">
                        <input placeholder="Username" name="username" className="my-20 w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        <input placeholder="Email" name="email" className="my-20 w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        <input type="password" name="password" placeholder="Password" className="w-3/5 h-10 bg-color-contrast dark:bg-color-contrast-dark rounded" />
                        <p>Use your new username and password to log in on the next page!</p>
                        <button className="m-5 rounded shadow-xl bg-color-highlight dark:bg-color-highlight-dark
                                px-8 py-5 "onClick={() => {
                                props.setIsModalOpen(false)
                            }}>Sign Up</button>

                    </form>
                </div>
            </div>
        </>
    );
}

export default NewUser