import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Switch,
  // Textarea,
  // Select,
} from "@radix-ui/themes";
import OrganizersNavbar from "../components/OrganizersNavbar";
import Footer from "../components/Footer";
import { useDropzone } from "react-dropzone";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "../schemas/validationSchema";
import ImageUpload from "../components/ImageUpload";
import { Button } from "../components/Buttons";
import { createEventFn } from "../firebase/createEvent";
import { categories } from "../dummy_data/data";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [albumPhotos, setAlbumPhotos] = useState([]);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      packages: [{ name: "", amount: "", description: "" }],
      promotionTick: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "packages",
  });

  const coverRef = useRef(null);
  const generalRef = useRef(null);
  const locationRef = useRef(null);
  const packagesRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 100; // Set your desired offset here
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = ref.current.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (coverRef.current) observer.observe(coverRef.current);
    if (generalRef.current) observer.observe(generalRef.current);
    if (locationRef.current) observer.observe(locationRef.current);
    if (packagesRef.current) observer.observe(packagesRef.current);

    return () => {
      if (coverRef.current) observer.unobserve(coverRef.current);
      if (generalRef.current) observer.unobserve(generalRef.current);
      if (locationRef.current) observer.unobserve(locationRef.current);
      if (packagesRef.current) observer.unobserve(packagesRef.current);
    };
  }, []);

  const onDrop = (acceptedFiles) => {
    const imageFile = acceptedFiles.find((file) =>
      file.type.startsWith("image/")
    );
    if (imageFile) {
      setUploadedFile(imageFile);
      setValue("coverPhoto", imageFile);
    } else {
      alert("Please upload a valid image file (jpeg, png, gif).");
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setValue("coverPhoto", null);
  };

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg"],
      "image/webp": [".webp"],
    },
    multiple: false,
    noClick: true,
    noKeyboard: true,
    disabled: uploadedFile !== null,
  });

  const onSubmit = async (data) => {
    // Include albumPhotos in the data object
    const eventData = {
      ...data,
      coverPhoto: uploadedFile,
      albumPhotos, // Include the album photos
    };
    await createEventFn(eventData);
  };

  return (
    <div className="font-poppins">
      <OrganizersNavbar />
      <Container className="my-8" mx="5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid columns={{ initial: "1", sm: "4" }}>
            <Box
              className="space-y-3 sticky-sidebar hidden md:block"
              gridColumn={{ md: "span 1" }}
            >
              <Heading>Create Event</Heading>
              <Flex direction="column" gapY="4">
                <Text
                  onClick={() => scrollToSection(coverRef)}
                  className={`cursor-pointer ${
                    activeSection === "cover"
                      ? "text-primary-500"
                      : "text-inherit"
                  }`}
                >
                  Upload Cover
                </Text>
                <Text
                  onClick={() => scrollToSection(generalRef)}
                  className={`cursor-pointer ${
                    activeSection === "general"
                      ? "text-primary-500"
                      : "text-inherit"
                  }`}
                >
                  General Information
                </Text>
                <Text
                  onClick={() => scrollToSection(locationRef)}
                  className={`cursor-pointer ${
                    activeSection === "location"
                      ? "text-primary-500"
                      : "text-inherit"
                  }`}
                >
                  Location And Time
                </Text>
                <Text
                  onClick={() => scrollToSection(packagesRef)}
                  className={`cursor-pointer ${
                    activeSection === "packages"
                      ? "text-primary-500"
                      : "text-inherit"
                  }`}
                >
                  Packages
                </Text>
              </Flex>
            </Box>
            <Box gridColumn={{ xs: "span 4", sm: "span 3" }}>
              <Flex className="space-y-3" direction="column" gapY="9">
                <div ref={coverRef} id="cover" className="space-y-10">
                  <Heading>Upload Cover</Heading>
                  <Text size="2" className="text-gray-300">
                    Upload the event cover to capture your audience's attention
                  </Text>
                  {uploadedFile ? (
                    <div
                      style={{
                        width: "70%",
                        height: "400px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={URL.createObjectURL(uploadedFile)}
                        alt="Uploaded File"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div style={{ position: "absolute", top: 0, right: 0 }}>
                        <Button
                          onClick={handleRemoveFile}
                          text="remove"
                          variant="secondary"
                        />
                      </div>
                    </div>
                  ) : (
                    <Flex align="center" justify="center">
                      <div
                        {...getRootProps({
                          className: "dropzone bg-gray-50",
                          style: {
                            width: "600px",
                            height: "400px",
                            border: "2px dashed #ccc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          },
                        })}
                        onClick={open}
                      >
                        <input {...getInputProps()} />
                        <Text align="center" className="max-w-[70%]">
                          Drag 'n' drop an image here, or click to select a file
                        </Text>
                      </div>
                    </Flex>
                  )}
                  {errors.coverPhoto && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.coverPhoto.message}
                    </p>
                  )}
                </div>
                <div ref={generalRef} id="general" className="space-y-3">
                  <Heading>General Information</Heading>
                  <Text size="2" className="text-gray-300">
                    Fill out the general information for the event here.
                  </Text>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="name"
                        >
                          Event Name
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.name ? "border-red-500" : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="text"
                          id="name"
                          required
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="description"
                        >
                          Event Description
                        </label>
                        <textarea
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.description
                              ? "border-red-500"
                              : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          id="description"
                          rows="4"
                          required
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.description.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="category"
                        >
                          Category
                        </label>
                        <select
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.category
                              ? "border-red-500"
                              : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          id="category"
                          required
                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                          {/* Add more categories as needed */}
                        </select>
                        {errors.category && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.category.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <div className="pt-5">
                    <ImageUpload
                      onUpload={(files) => setAlbumPhotos(files)} // Set album photos
                    />
                  </div>
                </div>
                <div ref={locationRef} id="location" className="space-y-3">
                  <Heading>Location and Time</Heading>
                  <Text size="2" className="text-gray-300">
                    Provide the location and time details of the event.
                  </Text>
                  {/* <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.address
                              ? "border-red-500"
                              : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="text"
                          id="address"
                          required
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}
                  <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.city ? "border-red-500" : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="text"
                          id="city"
                          required
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  {/* <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="state"
                        >
                          State/Province
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.state ? "border-red-500" : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="text"
                          id="state"
                          required
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.state.message}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}
                  {/* <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="country"
                        >
                          Country/Region
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.country
                              ? "border-red-500"
                              : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="text"
                          id="country"
                          required
                        />
                        {errors.country && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                    )}
                  /> */}
                  <Controller
                    name="eventDate"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="eventDate"
                        >
                          Event Date
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.eventDate
                              ? "border-red-500"
                              : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="date"
                          id="eventDate"
                          required
                        />
                        {errors.eventDate && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.eventDate.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    name="startTime"
                    control={control}
                    render={({ field }) => (
                      <div className="mb-4">
                        <label
                          className="block text-gray-500 mb-2"
                          htmlFor="startTime"
                        >
                          Start Time
                        </label>
                        <input
                          {...field}
                          className={`w-full px-3 py-2 border ${
                            errors.startTime
                              ? "border-red-500"
                              : "border-gray-100"
                          } rounded bg-gray-50 text-black`}
                          type="time"
                          id="startTime"
                          required
                        />
                        {errors.startTime && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.startTime.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                {/* <div ref={packagesRef} id="packages" className="space-y-3">
                  <Heading>Packages</Heading>
                  <Text size="2" className="text-gray-300">
                    Add details of the sponsorship packages available.
                  </Text>
                  {fields.map((item, index) => (
                    <div key={item.id} className="mb-4">
                      <Controller
                        name={`packages.${index}.name`}
                        control={control}
                        render={({ field }) => (
                          <div className="mb-2">
                            <label
                              className="block text-gray-500 mb-2"
                              htmlFor={`packages.${index}.name`}
                            >
                              Package Name
                            </label>
                            <input
                              {...field}
                              className={`w-full px-3 py-2 border ${
                                errors.packages?.[index]?.name
                                  ? "border-red-500"
                                  : "border-gray-100"
                              } rounded bg-gray-50 text-black`}
                              type="text"
                              id={`packages.${index}.name`}
                              required
                            />
                            {errors.packages?.[index]?.name && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.packages[index].name.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name={`packages.${index}.amount`}
                        control={control}
                        render={({ field }) => (
                          <div className="mb-2">
                            <label
                              className="block text-gray-500 mb-2"
                              htmlFor={`packages.${index}.amount`}
                            >
                              Package Amount
                            </label>
                            <input
                              {...field}
                              className={`w-full px-3 py-2 border ${
                                errors.packages?.[index]?.amount
                                  ? "border-red-500"
                                  : "border-gray-100"
                              } rounded bg-gray-50 text-black`}
                              type="number"
                              id={`packages.${index}.amount`}
                              required
                            />
                            {errors.packages?.[index]?.amount && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.packages[index].amount.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Controller
                        name={`packages.${index}.description`}
                        control={control}
                        render={({ field }) => (
                          <div className="mb-2">
                            <label
                              className="block text-gray-500 mb-2"
                              htmlFor={`packages.${index}.description`}
                            >
                              Package Description
                            </label>
                            <textarea
                              {...field}
                              className={`w-full px-3 py-2 border ${
                                errors.packages?.[index]?.description
                                  ? "border-red-500"
                                  : "border-gray-100"
                              } rounded bg-gray-50 text-black`}
                              id={`packages.${index}.description`}
                              rows="3"
                              required
                            />
                            {errors.packages?.[index]?.description && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.packages[index].description.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                      <Button
                        variant="secondary"
                        text="Remove Package"
                        onClick={() => index != 0 && remove(index)}
                      />
                    </div>
                  ))}
                  <Button
                    text="Add Another Package"
                    onClick={() =>
                      append({ name: "", amount: "", description: "" })
                    }
                  />
                  <div className="mt-4">
                    <Controller
                      name="promotionTick"
                      control={control}
                      render={({ field }) => (
                        <label className="flex items-center">
                          <Switch
                            size="3"
                            {...field}
                            defaultChecked={field.value}
                            className="mr-2"
                          />
                          Promotion
                        </label>
                      )}
                    />
                  </div>
                </div> */}
                <Flex className="w-full justify-center md:justify-end">
                  <Button type="submit" text="Submit" minWidth="15rem" />
                </Flex>
              </Flex>
            </Box>
          </Grid>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default CreateEventPage;
