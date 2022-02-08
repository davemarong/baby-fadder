// IMPORT

// Next
import Image from "next/image";

// React
import React, { useState } from "react";

// Material UI
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// Icon
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

// Components

// Utils

// Data

// TYPE/INTERFACE
type ImageFile = {
  selectedImage: File;
};
// Functional component
export const UploadImage = () => {
  // State
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);

  // Styled component
  const Input = styled("input")({
    display: "none",
  });

  // Functions
  const handleSelectedImage = (files: any) => {
    if (files && files[0]) {
      setSelectedImage(files[0]);
    }
  };

  // Return
  return (
    <Grid container spacing={6}>
      <Grid item>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleSelectedImage(event.currentTarget.files);
            }}
          />
          <Button
            variant="contained"
            component="span"
            endIcon={<FileUploadRoundedIcon />}
          >
            Last opp
          </Button>
        </label>
      </Grid>
      <Grid item>
        {selectedImage && (
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        )}
      </Grid>
    </Grid>
  );
};
