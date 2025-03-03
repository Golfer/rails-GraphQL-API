module GraphqlTriggers
	extend self

	def task_created(project_id, task)
		ProjectTaskInteractivesSchema.subscriptions.trigger(
			:task_created,
			{ project_id: project_id },
			{ task: task }
		)
	end
end
