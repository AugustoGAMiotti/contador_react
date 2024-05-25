

function ContadorC({count, add}){

    return(
        <>
            <button onClick={add}>
                Contador c: {count}
            </button>
        </>
    );
}

export default ContadorC