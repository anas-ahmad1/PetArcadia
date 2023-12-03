import TextareaAutosize from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';

export default function ViewBlogs() {
    return (
        <>
            <Container>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}

                    placeholder="Minimum 3 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </Container>
        </>
    );
}
