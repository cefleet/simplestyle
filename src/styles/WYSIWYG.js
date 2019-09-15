export const WYSIWYG = (props) => {
    return (
        <Box>
            <CKEditor
                editor={ClassicEditor}
                data={props.value}
                onInit={
                    editor => { }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    //This makes it look like a normal html input event
                    props.onChange({ target: { name: props.name, value: data } });
                }}

                config={{
                    toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'link']
                }}
            />
        </Box>
    )
};

