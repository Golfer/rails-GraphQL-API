module Subscriptions
	class TaskCreated < GraphQL::Schema::Subscription

		argument :project_id, ID, required: true
		field :task, Types::TaskType, null: false

		def subscribe(project_id:)
			project = Project.find(project_id)
			stream_from "tasks_project_#{project.id}"
		end
	end
end
