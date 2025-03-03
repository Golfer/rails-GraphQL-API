class CreateTaskProjectJob
  include Sidekiq::Worker
  queue_as :default

  def perform
    Project.find_each do |project|
      task = Task.create!(
        name: "New Task #{DateTime.now}",
        project_id: project.id
      )

      GraphqlTriggers.task_created(project.id, task)
    end
  end
end
