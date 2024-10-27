import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { imageUpload } from "../../../api/utils";
import AddContestForm from "../../../components/Dashboard/Form/AddContestForm";

const AddContest = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })

  //Date range handler
  const handleDates = item => {
    setDates(item.selection)
  }

  const { mutateAsync } = useMutation({
    mutationFn: async contestData => {
      const { data } = await axiosSecure.post(`/contest`, contestData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Contest Added Successfully!')
      navigate('/dashboard/my-created')
      setLoading(false)
    },
  })

  //   Form handler
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const name = form.name.value
    const category = form.category.value
    const location = form.location.value
    const to = dates.endDate
    const from = dates.startDate
    const price = form.price.value
    const description = form.description.value
    const money = form.money.value
    const image = form.image.files[0]

    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try {
      const image_url = await imageUpload(image)
      const contestData = {
        name,
        category,
        location,
        to,
        from,
        price,
        money,
        host,
        description,
        image: image_url,
      }
      console.table(contestData)

      //   Post request to server
      await mutateAsync(contestData)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
  }

  //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }
  return (
    <>
       <Helmet>
        <title>Add Contest | Dashboard</title>
      </Helmet>
       {/* Form */}
       <AddContestForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        handleImage={handleImage}
        imageText={imageText}
        loading={loading}
       ></AddContestForm>
    </>
  );
};

export default AddContest;