import { UpdateUserDetails, getUserDetails, updateUserDetails } from "@/api/user-details"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Button, ErrorMessage, Fieldset, Form, Input } from "nhsuk-react-components"
import { useEffect } from "react"
import { useForm } from 'react-hook-form'

const UserDetailsPage = (): JSX.Element => {
  const id = '0e091c01-3889-40e6-b43b-617d7770ffa0'

  const queryClient = useQueryClient()

  const { isLoading: isLoadingUserDetails, data: userDetails } = useQuery({
    queryKey: ['userDetail', id],
    queryFn: ({ queryKey }) => {
      const [_key, userId] = queryKey

      return getUserDetails(userId)
    },
  })

  const {
    isLoading: isLoadingUserDetailsUpdate,
    isError: isErrorUserDetailsUpdate,
    mutateAsync: mutateUserDetails
  } = useMutation({
    mutationFn: (details: UpdateUserDetails) => {
      return updateUserDetails(id, details)
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['userDetail', id] })
  })

  const { register, setValue, handleSubmit } = useForm<UpdateUserDetails>()

  useEffect(() => {
    if (!userDetails) {
      return
    }

    setValue('firstName', userDetails.firstName)
    setValue('lastName', userDetails.lastName)
  }, [userDetails])

  return (
    <>
      <Form>
        <Fieldset>
          <Fieldset.Legend isPageHeading>User details</Fieldset.Legend>
          <Input
            label="First name"
            {...register('firstName')}
            disabled={isLoadingUserDetails || isLoadingUserDetailsUpdate}
            ref={undefined}
            inputRef={register('firstName').ref as any} />
          <Input
            label="Last name"
            {...register('lastName')}
            disabled={isLoadingUserDetails || isLoadingUserDetailsUpdate}
            ref={undefined}
            inputRef={register('lastName').ref as any} />
        </Fieldset>
        <Button
          onClick={handleSubmit((userDetails) => mutateUserDetails(userDetails))}
          disabled={isLoadingUserDetails || isLoadingUserDetailsUpdate}
        >Save changes</Button>

        {isErrorUserDetailsUpdate && (
          <ErrorMessage>
            There was an error saving your changes, please try again. If you keep seeing this error, contact support.
          </ErrorMessage>
        )}
      </Form>
    </>
  )
}

export default UserDetailsPage
